import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import {
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Dialog } from '@components';
import { CinemaHeading } from '@constants';
import { CinemasContainer, Filter, FilterKey } from '@containers';
import { useGetCinemasQuery, useGetLocationFilterQuery } from '@services';
import { SelectedFiltersType } from '@types';

const Cinemas = () => {
    {
        /*Location API calling*/
    }
    const { data: locationData } = useGetLocationFilterQuery();

    {
        /*Filters State*/
    }
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<SelectedFiltersType>({
        location: '',
    });

    const [searchParams, setSearchParams] = useSearchParams();

    {
        /*Params from URL*/
    }
    const locationFromUrl = searchParams.get('location');

    {
        /*Cinema API calling*/
    }
    const { data: cinemaData, isLoading } = useGetCinemasQuery({
        location: locationFromUrl ?? '',
    });

    {
        /*Syncing Check box with URL*/
    }
    useEffect(() => {
        setSelectedFilter({
            location: locationFromUrl ?? '',
        });
    }, [searchParams.toString()]);

    {
        /*Handlers*/
    }
    const handleFiltersSelected = (
        event: React.ChangeEvent<HTMLInputElement>,
        filter: string,
        heading: string,
    ) => {
        setSelectedFilter((prev) => ({
            ...prev,
            [heading]: event.target.checked ? filter : '',
        }));
    };

    const handleFiltersClose = () => {
        setFiltersOpen(false);
    };

    const handleApplyFilters = () => {
        const params: Record<string, string> = {};

        if (selectedFilter.location) {
            params.location = selectedFilter.location;
        }

        setSearchParams(params);
        handleFiltersClose();
    };

    const FilterHeading: FilterKey[] = ['location'];

    const FilterData = {
        location: locationData,
    };

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack flexDirection="row" gap={theme.spacing(3)}>
            {isDesktop && (
                <Filter
                    handleFiltersSelected={handleFiltersSelected}
                    selectedFilters={selectedFilter}
                    handleApplyFilters={handleApplyFilters}
                    FilterData={FilterData}
                    FilterHeading={FilterHeading}
                />
            )}
            <Stack width={isDesktop ? '70%' : '100%'}>
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h1">{CinemaHeading}</Typography>
                    {!isDesktop && (
                        <>
                            <Button
                                onClick={() => setFiltersOpen(true)}
                                variant="outlined"
                            >
                                Filters
                            </Button>

                            <Dialog
                                open={filtersOpen}
                                handleClose={handleFiltersClose}
                                ListHeading={FilterHeading}
                                DialogListData={FilterData}
                                selectedCheckedBox={selectedFilter}
                                handleCheckBox={handleFiltersSelected}
                                handleButtonClick={handleApplyFilters}
                                buttonText="Apply Filters"
                            />
                        </>
                    )}
                </Stack>
                <CinemasContainer data={cinemaData} isLoading={isLoading} />
            </Stack>
        </Stack>
    );
};

export default Cinemas;

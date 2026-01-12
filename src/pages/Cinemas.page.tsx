import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { useInfiniteScroll } from 'utils';

import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Dialog, NoData } from '@components';
import { CINEMA_HEADING } from '@constants';
import { CinemasContainer, Filter, FilterKey } from '@containers';
import {
    useGetCinemasInfiniteQuery,
    useGetLocationFilterQuery,
} from '@services';
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
    const {
        data: cinemaData,
        fetchNextPage,
        hasNextPage,
        isFetching,
    } = useGetCinemasInfiniteQuery({
        location: locationFromUrl ?? '',
    });

    const currentData = cinemaData?.pages.flatMap((movie) => movie.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadData: fetchNextPage,
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

    const filterHeading: FilterKey[] = ['location'];

    const filterData = {
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
                    filterData={filterData}
                    filterHeading={filterHeading}
                />
            )}
            <Stack width={isDesktop ? '70%' : '100%'}>
                <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h1">{CINEMA_HEADING}</Typography>
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
                                ListHeading={filterHeading}
                                DialogListData={filterData}
                                selectedCheckedBox={selectedFilter}
                                handleCheckBox={handleFiltersSelected}
                                handleButtonClick={handleApplyFilters}
                                buttonText="Apply Filters"
                            />
                        </>
                    )}
                </Stack>
                {currentData?.length || isFetching ? (
                    <CinemasContainer
                        data={currentData}
                        isFetching={isFetching}
                    />
                ) : (
                    <NoData />
                )}
                <Box ref={endRef} height={1}></Box>
            </Stack>
        </Stack>
    );
};

export default Cinemas;

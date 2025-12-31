import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { setToStringArray } from 'utils';

import {
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Dialog } from '@components';
import { Filter, MoviesContainer } from '@containers';
import {
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useGetMoviesQuery,
} from '@services';

type SelectedFilters = Record<string, Set<string>>;
const Movies = () => {
    {
        /*Genre and Language API calling*/
    }
    const { data: languageData } = useGetLanguageFiltersQuery();
    const { data: genreData } = useGetGenresFiltersQuery();

    {
        /*Filters State*/
    }
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<SelectedFilters>({
        genre: new Set(),
        language: new Set(),
    });

    const [searchParams, setSearchParams] = useSearchParams();

    {
        /*Params from URL*/
    }
    const languageFromUrl = searchParams.getAll('language');
    const genreFromUrl = searchParams.getAll('genre');

    {
        /*Syncing Check box with URL*/
    }
    useEffect(() => {
        setSelectedFilter({
            language: new Set(languageFromUrl),
            genre: new Set(genreFromUrl),
        });
    }, [searchParams.toString()]);

    {
        /*Movie API query*/
    }
    const { data, isLoading } = useGetMoviesQuery({
        language: languageFromUrl,
        genre: genreFromUrl,
    });

    {
        /*Handlers*/
    }
    const handleFiltersSelected = (
        event: React.ChangeEvent<HTMLInputElement>,
        filter: string,
        heading: string,
    ) => {
        setSelectedFilter((prev) => {
            const next = new Set(prev[heading]);
            if (event.target.checked) {
                next.add(filter);
            } else {
                next.delete(filter);
            }
            return {
                ...prev,
                [heading]: next,
            };
        });
    };

    const handleFiltersClose = () => {
        setFiltersOpen(false);
    };

    const handleApplyFilters = () => {
        const params: Record<string, string[]> = {};

        if (selectedFilter.language) {
            params.language = setToStringArray(selectedFilter.language);
        }

        if (selectedFilter.genre.size) {
            params.genre = setToStringArray(selectedFilter.genre);
        }

        setSearchParams(params);
        handleFiltersClose();
    };

    type FilterKey = 'genre' | 'language';
    const FilterHeading: FilterKey[] = ['genre', 'language'];

    const FilterData = {
        genre: genreData,
        language: languageData,
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
                    <Typography variant="h1">Movies</Typography>
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
                <MoviesContainer data={data} isLoading={isLoading} />
            </Stack>
        </Stack>
    );
};

export default Movies;

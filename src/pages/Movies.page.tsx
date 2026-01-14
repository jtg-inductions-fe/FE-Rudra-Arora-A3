import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { setToStringArray, useInfiniteScroll } from 'utils';

import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Dialog, NoData } from '@components';
import { Filter, MoviesContainer } from '@containers';
import {
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useGetMoviesInfiniteQuery,
} from '@services';
import { FilterKey } from '@types';

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
    const [selectedFilter, setSelectedFilter] = useState<
        Record<string, Set<string>>
    >({
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
    const {
        data: movieData,
        hasNextPage,
        fetchNextPage,
        isFetching,
    } = useGetMoviesInfiniteQuery({
        language: languageFromUrl,
        genre: genreFromUrl,
    });

    const currentMovieData = movieData?.pages.flatMap((movie) => movie.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadData: fetchNextPage,
    });

    {
        /*Handlers*/
    }

    /**
     * Function for handling the filters selected
     * @param event
     * @param filter
     * @param heading
     */
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

    /**
     * Funtion for closing the Dialog component on Mobile
     */
    const handleFiltersClose = () => {
        setFiltersOpen(false);
    };

    /**
     * Function for applying the filters, It sets the query param in the URL
     */
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

    const filterHeading: FilterKey[] = ['genre', 'language'];

    const filterData = {
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
                {currentMovieData?.length || isFetching ? (
                    <MoviesContainer
                        data={currentMovieData}
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

export default Movies;

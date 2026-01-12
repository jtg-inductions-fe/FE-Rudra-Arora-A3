import { useInfiniteScroll } from 'utils';

import { Stack } from '@mui/material';

import { ErrorBoundary, NoData, Typography } from '@components';
import { LATEST_MOVIES_HEADING } from '@constants';
import { LatestMoviesContainer } from '@containers';
import { useGetMoviesInfiniteQuery } from '@services';

const LatestMovies = () => {
    const { data, fetchNextPage, isFetching, hasNextPage, error } =
        useGetMoviesInfiniteQuery({ latest: true });

    const currentData = data?.pages.flatMap((item) => item.results);

    const endRef = useInfiniteScroll({
        hasNextPage,
        isFetching,
        onLoadData: fetchNextPage,
    });

    return (
        <Stack>
            <Typography variant="h1">{LATEST_MOVIES_HEADING}</Typography>

            <ErrorBoundary error={error}>
                {currentData?.length || isFetching ? (
                    <LatestMoviesContainer
                        endRef={endRef}
                        data={currentData}
                        isFetching={isFetching}
                    />
                ) : (
                    <NoData />
                )}
            </ErrorBoundary>
        </Stack>
    );
};

export default LatestMovies;

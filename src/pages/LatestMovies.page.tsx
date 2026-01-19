import { useInfiniteScroll } from 'utils';

import { Stack } from '@mui/material';

import { NoData, Typography } from '@components';
import { LATEST_MOVIES_HEADING } from '@constants';
import { LatestMoviesContainer } from '@containers';
import { useGetMoviesInfiniteQuery } from '@services';

const LatestMovies = () => {
    const { data, fetchNextPage, isFetching, hasNextPage } =
        useGetMoviesInfiniteQuery({ latest: true });

    const currentData = data?.pages.flatMap((item) => item.results);

    const endRef = useInfiniteScroll({
        hasNextPage,
        isFetching,
        onLoadData: fetchNextPage,
    });

    return (
        <Stack component="section" aria-label="Latest Movies">
            <Typography variant="h1">{LATEST_MOVIES_HEADING}</Typography>

            {currentData?.length || isFetching ? (
                <LatestMoviesContainer
                    endRef={endRef}
                    data={currentData}
                    isFetching={isFetching}
                />
            ) : (
                <NoData />
            )}
        </Stack>
    );
};

export default LatestMovies;

import { useInfiniteScroll } from 'utils';

import { LatestMoviesContainer } from '@containers';
import { useGetMoviesInfiniteQuery } from '@services';

const LatestMovies = () => {
    const { data, isLoading, fetchNextPage, isFetching, hasNextPage } =
        useGetMoviesInfiniteQuery({ latest: true });

    const currentData = data?.pages.flatMap((movie) => movie.results);

    const endRef = useInfiniteScroll({
        hasNextPage: hasNextPage,
        isFetching,
        onLoadData: fetchNextPage,
    });

    return (
        <LatestMoviesContainer
            endRef={endRef}
            data={currentData}
            isLoading={isLoading}
        />
    );
};

export default LatestMovies;

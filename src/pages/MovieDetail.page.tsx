import { useParams } from 'react-router-dom';

import { NoData } from '@components';
import { MovieDetailContainer } from '@containers';
import { useGetMoviesByNameQuery } from '@services';

const MovieDetail = () => {
    const param = useParams();
    const { data: movieDetail, isFetching } = useGetMoviesByNameQuery(
        param.slug ?? '',
        { skip: !param.slug },
    );
    return movieDetail || isFetching ? (
        <MovieDetailContainer movieData={movieDetail} isFetching={isFetching} />
    ) : (
        <NoData />
    );
};
export default MovieDetail;

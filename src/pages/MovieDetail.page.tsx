import { useParams } from 'react-router-dom';

import { MovieDetailContainer } from '@containers';
import { useGetMoviesByNameQuery } from '@services';

const MovieDetail = () => {
    const param = useParams();
    const { data: movieDetail } = useGetMoviesByNameQuery(
        param.movie_name ?? '',
    );
    return <MovieDetailContainer movieData={movieDetail} />;
};
export default MovieDetail;

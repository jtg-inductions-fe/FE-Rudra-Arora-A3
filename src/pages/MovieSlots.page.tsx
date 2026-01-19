import { useParams } from 'react-router-dom';
import { LanguageFormatter } from 'utils/Movie.utils';

import { SlotContainer } from '@containers';
import { useGetMoviesByNameQuery, useLazyGetMovieSlotsQuery } from '@services';

const MovieSlots = () => {
    const param = useParams();
    const { data: movieDetail } = useGetMoviesByNameQuery(param.slug ?? '');
    const [trigger] = useLazyGetMovieSlotsQuery();

    return (
        <SlotContainer
            heading={movieDetail?.name}
            id={movieDetail?.id}
            subHeading={LanguageFormatter(movieDetail?.languages ?? [''])}
            trigger={trigger}
        />
    );
};

export default MovieSlots;

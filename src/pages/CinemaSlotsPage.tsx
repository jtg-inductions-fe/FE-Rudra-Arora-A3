import { useParams } from 'react-router-dom';

import { SlotContainer } from '@containers';
import { useGetCinemaByNameQuery, useLazyGetCinemaSlotsQuery } from '@services';

const CinemaSlots = () => {
    const param = useParams();
    const { data: cinemaDetail } = useGetCinemaByNameQuery(param.slug ?? '');
    const [trigger] = useLazyGetCinemaSlotsQuery();

    return (
        <SlotContainer
            id={cinemaDetail?.id}
            heading={cinemaDetail?.name}
            trigger={trigger}
        />
    );
};

export default CinemaSlots;

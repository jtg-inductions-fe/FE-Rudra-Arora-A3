import { useParams } from 'react-router-dom';

import { Skeleton, useTheme } from '@mui/material';

import { NoData } from '@components';
import { SlotContainer } from '@containers';
import { useGetCinemaByNameQuery, useLazyGetCinemaSlotsQuery } from '@services';

const CinemaSlots = () => {
    const param = useParams();
    const {
        data: cinemaDetail,
        isFetching: isFetchingCinemaDetail,
        isLoading: isLoadingCinemaDetail,
    } = useGetCinemaByNameQuery(param.slug ?? '', {
        skip: !param.slug,
    });
    const [trigger, { isFetching }] = useLazyGetCinemaSlotsQuery();
    const { typography } = useTheme();

    return (
        <>
            {isLoadingCinemaDetail && (
                <>
                    <Skeleton
                        width={typography.pxToRem(300)}
                        height={typography.pxToRem(30)}
                    />
                    <Skeleton
                        width={typography.pxToRem(300)}
                        height={typography.pxToRem(30)}
                    />
                    <Skeleton
                        variant="rectangular"
                        width={typography.pxToRem(100)}
                        height={typography.pxToRem(30)}
                    />
                </>
            )}
            {cinemaDetail && (
                <SlotContainer
                    id={cinemaDetail?.id}
                    heading={cinemaDetail?.name}
                    trigger={trigger}
                    isFetchingSlotData={isFetching}
                />
            )}

            {!isFetchingCinemaDetail && !cinemaDetail && <NoData />}
        </>
    );
};

export default CinemaSlots;

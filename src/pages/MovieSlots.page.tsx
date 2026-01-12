import { useParams } from 'react-router-dom';
import { LanguageFormatter } from 'utils/Movie.utils';

import { Skeleton, useTheme } from '@mui/material';

import { NoData } from '@components';
import { SlotContainer } from '@containers';
import { useGetMoviesByNameQuery, useLazyGetMovieSlotsQuery } from '@services';

const MovieSlots = () => {
    const param = useParams();
    const { data: movieDetail, isFetching: isFetchingMovieDetail } =
        useGetMoviesByNameQuery(param.slug ?? '', {
            skip: !param.slug,
        });
    const [trigger, { isFetching }] = useLazyGetMovieSlotsQuery();
    const { typography } = useTheme();

    return (
        <>
            {isFetchingMovieDetail && (
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
            {!isFetchingMovieDetail && movieDetail && (
                <SlotContainer
                    heading={movieDetail.name}
                    id={movieDetail.id}
                    subHeading={LanguageFormatter(movieDetail?.languages ?? [])}
                    trigger={trigger}
                    isFetchingSlotData={isFetching}
                />
            )}

            {!isFetchingMovieDetail && !movieDetail && <NoData />}
        </>
    );
};

export default MovieSlots;

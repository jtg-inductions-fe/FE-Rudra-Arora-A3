import { useNavigate, useSearchParams } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import { Grid2, IconButton, Stack, useTheme } from '@mui/material';

import { useAppDispatch } from '@app';
import { CardSkeleton, Grid, InfoCard, NoData, Typography } from '@components';
import {
    GET_PURCHASE_PAGE_HEADING,
    ROUTES,
    SEAT_BOOKING_CONSTANTS,
} from '@constants';
import { showSnackbar } from '@features';
import {
    useGetPurchaseHistoryInfiniteQuery,
    useSeatCancelMutation,
} from '@services';
import { PurchaseType } from '@types';

const PurchaseHistory = () => {
    const [searchParam] = useSearchParams();

    const purchase = searchParam.get('purchase') as PurchaseType;

    const navigate = useNavigate();

    const { typography } = useTheme();

    const {
        data: purchaseData,
        refetch,
        isFetching,
    } = useGetPurchaseHistoryInfiniteQuery({
        purchase,
    });

    const [trigger, { isLoading }] = useSeatCancelMutation();
    const dispatch = useAppDispatch();

    const purchaseCurrentData = purchaseData?.pages.flatMap(
        (item) => item.results,
    );

    const handleCancelTicket = async (id: number) => {
        try {
            await trigger({ id }).unwrap();
            dispatch(
                showSnackbar({
                    message: ['Ticket Cancelled Successfully'],
                    variant: 'success',
                }),
            );
            await refetch();
        } catch {
            dispatch(
                showSnackbar({
                    message: ['Something went wrong'],
                    variant: 'error',
                }),
            );
        }
    };

    return (
        <Stack component="section" aria-label="Purchase History" gap={3}>
            <Stack
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <IconButton
                    onClick={() =>
                        void navigate(ROUTES.PROFILE, { replace: true })
                    }
                    sx={{ padding: 0 }}
                >
                    <ArrowBackIosIcon
                        sx={{ fontSize: typography.pxToRem(50) }}
                        color="primary"
                    />
                </IconButton>
                <Typography variant="h1">
                    {GET_PURCHASE_PAGE_HEADING(purchase)}
                </Typography>
            </Stack>

            {isFetching && (
                <Grid2 container spacing={{ xs: 2, sm: 3 }}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Grid key={`skeleton-${index}`}>
                            <CardSkeleton />
                        </Grid>
                    ))}
                </Grid2>
            )}

            {purchaseCurrentData?.length !== 0 && (
                <Grid2 container spacing={{ xs: 2, sm: 3 }}>
                    {purchaseCurrentData?.map((data) => (
                        <Grid2
                            key={data.id}
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            display="flex"
                            justifyContent="center"
                        >
                            <InfoCard
                                INFO_CARD_CONSTANTS={SEAT_BOOKING_CONSTANTS}
                                buttonText={
                                    purchase === 'upcoming'
                                        ? 'Cancel'
                                        : undefined
                                }
                                handleButtonClick={handleCancelTicket}
                                isLoading={isLoading}
                                {...data}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            )}

            {!isFetching && !purchaseCurrentData?.length && <NoData />}
        </Stack>
    );
};

export default PurchaseHistory;

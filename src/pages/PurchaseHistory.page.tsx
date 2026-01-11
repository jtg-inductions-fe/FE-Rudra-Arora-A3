import { useSearchParams } from 'react-router-dom';

import { Grid2, Stack } from '@mui/material';

import { InfoCard, Typography } from '@components';
import { GET_PURCHASE_PAGE_HEADING, SEAT_BOOKING_CONSTANTS } from '@constants';
import {
    useGetPurchaseHistoryInfiniteQuery,
    useSeatCancelMutation,
} from '@services';

const PurchaseHistory = () => {
    const [searchParam] = useSearchParams();

    const purchase = searchParam.get('purchase') as
        | 'upcoming'
        | 'cancel'
        | 'past';

    const { data: purchaseData, refetch } = useGetPurchaseHistoryInfiniteQuery({
        purchase,
    });

    const [trigger] = useSeatCancelMutation();

    const purchaseCurrentData = purchaseData?.pages.flatMap(
        (item) => item.results,
    );

    const handleCancelTicket = async (id: number) => {
        await trigger({ id }).unwrap();
        await refetch();
    };

    return (
        <Stack gap={3}>
            <Typography variant="h1">
                {GET_PURCHASE_PAGE_HEADING(purchase)}
            </Typography>

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
                                purchase === 'upcoming' ? 'Cancel' : undefined
                            }
                            handleButtonClick={handleCancelTicket}
                            {...data}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    );
};

export default PurchaseHistory;

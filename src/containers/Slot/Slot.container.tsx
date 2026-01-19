import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import { Stack, useTheme } from '@mui/material';

import {
    DatePicker,
    SlotCard,
    SlotCardDataType,
    SlotCardSkeleton,
    Typography,
} from '@components';

import { SlotContainerProps } from './Slot.types';

const SlotContainer = ({
    heading,
    subHeading,
    id,
    trigger,
    isFetchingSlotData,
}: SlotContainerProps) => {
    const [searchParams] = useSearchParams();

    const [slotData, setSlotData] = useState<SlotCardDataType[]>();

    const { spacing } = useTheme();

    useEffect(() => {
        const fetchSlotData = async () => {
            const response = await trigger({
                id: id ?? 0,
                param: searchParams.get('date') ?? dayjs().format('YYYY-MM-DD'),
            }).unwrap();
            setSlotData(response);
        };
        if (heading) {
            void fetchSlotData();
        }
    }, [heading, searchParams]);

    return (
        <Stack
            component="section"
            aria-label="Movie-Cinema Slots"
            gap={spacing(2)}
        >
            <Typography variant="h1">{heading}</Typography>

            <Typography color="primary" variant="body1">
                {subHeading}
            </Typography>

            <Stack gap={spacing(3)}>
                <DatePicker />

                {isFetchingSlotData && <SlotCardSkeleton />}

                {!isFetchingSlotData && slotData?.length !== 0 && (
                    <Stack gap={spacing(3)}>
                        {slotData?.map((item) => (
                            <SlotCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                buttonData={item.buttonData}
                            />
                        ))}
                    </Stack>
                )}

                {!isFetchingSlotData && !slotData?.length && (
                    <Typography textAlign="center" variant="h2">
                        No Movie/Slots Available
                    </Typography>
                )}
            </Stack>
        </Stack>
    );
};

export default SlotContainer;

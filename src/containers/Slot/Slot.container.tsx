import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import { Stack, useTheme } from '@mui/material';

import {
    DatePicker,
    SlotCard,
    SlotCardDataType,
    Typography,
} from '@components';

import { SlotContainerProps } from './Slot.types';

const SlotContainer = ({
    heading,
    subHeading,
    id,
    trigger,
}: SlotContainerProps) => {
    const [searchParams] = useSearchParams();

    const [MovieSlotData, setMovieSlotData] = useState<SlotCardDataType[]>();

    const { spacing } = useTheme();

    useEffect(() => {
        const fetchSlotData = async () => {
            const response = await trigger({
                id: id ?? 0,
                param:
                    searchParams.get('date') ??
                    String(dayjs().format('YYYY-MM-DD')),
            }).unwrap();
            setMovieSlotData(response);
        };
        if (heading) {
            void fetchSlotData();
        }
    }, [heading, searchParams]);

    return (
        <Stack gap={spacing(2)}>
            <Typography variant="h1">{heading}</Typography>

            <Typography color="primary" variant="body1">
                {subHeading}
            </Typography>

            <Stack gap={spacing(3)}>
                <DatePicker />

                <Stack gap={spacing(3)}>
                    {MovieSlotData?.map((item) => (
                        <SlotCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            buttonData={item.buttonData}
                        />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default SlotContainer;

import { useEffect, useState } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import { svgIconClasses, useMediaQuery, useTheme } from '@mui/material';
import {
    DatePicker as MuiDatePicker,
    LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePicker = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const dateFromUrl = searchParams.get('date');

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const [value, setValue] = useState<Dayjs | null>(
        dateFromUrl ? dayjs(dateFromUrl) : dayjs(),
    );

    useEffect(() => {
        setSearchParams(
            {
                date: value?.format('YYYY-MM-DD') ?? '',
            },
            { replace: true },
        );
    }, [value, setSearchParams, searchParams]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
                label=""
                value={value}
                onChange={(newValue) => setValue(newValue)}
                disablePast
                slotProps={{
                    leftArrowIcon: {
                        sx: {
                            color: 'primary.main',
                        },
                    },
                    rightArrowIcon: {
                        sx: {
                            color: 'primary.main',
                        },
                    },
                    switchViewIcon: {
                        sx: {
                            color: 'primary.main',
                        },
                    },
                    yearButton: {
                        sx: {
                            '&:hover': {
                                color: theme.palette.primary.main,
                            },
                            '&: focus-visible': {
                                color: theme.palette.primary.main,
                            },
                        },
                    },
                    textField: {
                        sx: {
                            width: isDesktop ? 'fit-content' : 'auto',
                            [`& .${svgIconClasses.root}`]: {
                                color: 'primary.main',
                            },
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export default DatePicker;

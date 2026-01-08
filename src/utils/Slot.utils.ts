import dayjs from 'dayjs';

export const SlotTimeFormatter = (time: string): string => {
    const formattedTime = dayjs(time).format('HH:mm');

    return formattedTime;
};

export const slotDateFormatter = (date: string): string => {
    const formattedDate = dayjs(date).format('DD-MM-YYYY');

    return formattedDate;
};

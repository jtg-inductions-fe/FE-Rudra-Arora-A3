import dayjs from 'dayjs';

export const SlotTimeFormatter = (time: string): string => {
    const formattedTime = dayjs(time).format('HH:mm');

    return formattedTime;
};

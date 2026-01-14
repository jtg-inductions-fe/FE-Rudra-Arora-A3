import { CardComponentProps } from '../Card';

export type InfoCardDataType = {
    subtitle3: string;
} & Pick<CardComponentProps, 'title' | 'subtitle1' | 'subtitle2' | 'id'>;

export type InfoCardProps = InfoCardDataType & {
    buttonText?: string;
    linkUrl?: string;
    INFO_CARD_CONSTANTS: {
        KEY1: string;
        KEY2: string;
        KEY3: string;
    };
    isLoading?: boolean;
    handleButtonClick?: (id: number) => Promise<void>;
};

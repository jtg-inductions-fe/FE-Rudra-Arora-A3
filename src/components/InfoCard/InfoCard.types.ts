import { CardComponentProps } from 'components/Card/Card.types';

export type InfoCardDataType = {} & Pick<
    CardComponentProps,
    'title' | 'subtitle1' | 'subtitle2' | 'id'
>;

export type InfoCardProps = InfoCardDataType & {
    buttonText?: string;
    buttonUrl?: string;
    subtitle3?: string;
    INFO_CARD_CONSTANTS: {
        KEY1: string;
        KEY2: string;
        KEY3: string;
    };
};

import { CardComponentProps } from 'components/Card/Card.types';

export type SlotCardButtonDataType = {
    buttonId: number;
    buttonText: string;
};

export type SlotCardDataType = {
    buttonData: SlotCardButtonDataType[];
} & Pick<CardComponentProps, 'id' | 'title' | 'subtitle1' | 'subtitle2'>;

export type SlotCardProps = SlotCardDataType;

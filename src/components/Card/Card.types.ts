import { PaginatedResponseType } from '@types';

export type CardDataType = {
    id: number;
    posterUrl?: string;
    title: string;
    subtitle1?: string;
    subtitle2?: string;
    subtitle3?: string;
    slug?: string;
};

export type CardPaginatedDataType = PaginatedResponseType<CardDataType[]>;

export type CardComponentProps = {
    buttonText?: string;
    buttonUrl?: string;
    subtitleHeading: Record<string, string>;
    handleButtonClick?: () => void;
} & CardDataType;

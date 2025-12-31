export type CardDataType = {
    id: number;
    posterUrl?: string;
    title: string;
    subtitle1?: string;
    subtitle2?: string;
};

export type CardPaginatedDataType = {
    next: string;
    previous: string;
    results: CardDataType[];
};

export type CardComponentProps = {
    buttonText?: string;
    buttonUrl?: string;
    subtitleHeading: Record<string, string>;
} & CardDataType;

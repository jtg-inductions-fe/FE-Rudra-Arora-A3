export type CinemaFilterTypes = {
    location: string;
};

export type CinemaDataType = {
    id: number;
    name: string;
    location: string;
    rows: number;
    seats_per_row: number;
    slug: string;
};

export type CinemaResponseType = {
    next: string;
    previous: string;
    results: CinemaDataType[];
};

export type LocationFilterType = {
    city: string;
};

export type SelectedFiltersType = Record<string, string>;

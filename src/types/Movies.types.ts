export type MovieFilterTypes = {
    latest?: boolean;
    language?: string[];
    genre?: string[];
};

export type MovieDataType = {
    id: number;
    name: string;
    description: string;
    duration: string;
    release_date: string;
    languages: string[];
    genres: string[];
    slug: string;
};

export type MovieResponseType = {
    next: string;
    previous: string;
    results: MovieDataType[];
};

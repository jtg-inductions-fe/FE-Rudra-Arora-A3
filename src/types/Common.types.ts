export type PaginatedResponseType<T> = {
    next: string | null;
    previous: string | null;
    results: T;
};

export type FilterKey = 'genre' | 'language';

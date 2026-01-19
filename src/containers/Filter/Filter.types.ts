import { DialogDataType } from '@components';

export type FilterKey = 'genre' | 'language' | 'location';

export type FilterContainerProps = {
    filterHeading: FilterKey[];
    filterData: Record<string, DialogDataType[] | undefined>;
    selectedFilters: Record<string, Set<string> | string>;
    handleApplyFilters: () => void;
    handleFiltersSelected: (
        event: React.ChangeEvent<HTMLInputElement>,
        filter: string,
        heading: string,
    ) => void;
    handleClearFilters: () => void;
};

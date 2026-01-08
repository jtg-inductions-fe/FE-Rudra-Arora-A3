import { Button, Stack } from '@mui/material';

import { Accordion, Typography } from '@components';

import { StyledStack } from './Filter.styles';
import { FilterContainerProps } from './Filter.types';

const Filter = ({
    FilterData,
    FilterHeading,
    handleApplyFilters,
    handleFiltersSelected,
    selectedFilters,
}: FilterContainerProps) => (
    <StyledStack>
        <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography variant="h3">Filters</Typography>
            <Typography
                component={Button}
                onClick={handleApplyFilters}
                variant="body1"
                color="primary"
            >
                Apply
            </Typography>
        </Stack>

        {FilterHeading.map((filter) => (
            <Accordion
                key={filter}
                Details={FilterData}
                handleItemsSelected={handleFiltersSelected}
                selectedItem={selectedFilters}
                title={filter}
            />
        ))}
    </StyledStack>
);

export default Filter;

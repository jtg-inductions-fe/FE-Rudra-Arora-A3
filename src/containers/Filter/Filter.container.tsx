import { Button, Stack, useTheme } from '@mui/material';

import { Accordion, Typography } from '@components';

import { StyledStack } from './Filter.styles';
import { FilterContainerProps } from './Filter.types';

const Filter = ({
    filterData,
    filterHeading,
    handleApplyFilters,
    handleFiltersSelected,
    selectedFilters,
}: FilterContainerProps) => {
    const theme = useTheme();

    return (
        <StyledStack>
            <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h3">Filters</Typography>
                <Button
                    onClick={handleApplyFilters}
                    variant="text"
                    sx={{ color: theme.palette.primary.main }}
                >
                    Apply
                </Button>
            </Stack>

            {filterHeading.map((filter) => (
                <Accordion
                    key={filter}
                    Details={filterData}
                    handleItemsSelected={handleFiltersSelected}
                    selectedItem={selectedFilters}
                    title={filter}
                />
            ))}
        </StyledStack>
    );
};

export default Filter;

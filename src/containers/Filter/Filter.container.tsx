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
    handleClearFilters,
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
                <Stack
                    justifyContent="space-between"
                    gap={1}
                    alignItems="center"
                    flexDirection="row"
                >
                    <Button
                        onClick={handleApplyFilters}
                        variant="text"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        Apply
                    </Button>
                    <Typography color="primary" variant="subtitle1">
                        |
                    </Typography>
                    <Button
                        onClick={handleClearFilters}
                        variant="text"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        Clear
                    </Button>
                </Stack>
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

import { Grid2 } from '@mui/material';

import { GridProps } from './Grid.types';

const Grid = ({ children, ...rest }: GridProps) => (
    <Grid2
        container={rest.container}
        spacing={rest.spacing}
        size={{ xs: 12, sm: 4, md: 4 }}
    >
        {children}
    </Grid2>
);

export default Grid;

import { ReactNode } from 'react';

import { Grid2Props } from '@mui/material';

export type GridProps = {
    children: ReactNode;
} & Pick<Grid2Props, 'container' | 'spacing'>;

import { Suspense } from 'react';

import { CircularProgress, Stack } from '@mui/material';

export const Loader = () => (
    <Stack alignItems="center" height="100dvh" justifyContent="center">
        <CircularProgress size={100} color="primary" />
    </Stack>
);

const RouteLoader = ({ children }: { children: React.ReactNode }) => (
    <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default RouteLoader;

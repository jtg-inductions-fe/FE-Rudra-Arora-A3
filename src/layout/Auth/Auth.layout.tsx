import { Outlet } from 'react-router-dom';

import { Stack } from '@mui/material';

export const AuthLayout = () => (
    //TODO: Add Authentication Layout Here
    <Stack>
        <Outlet />
    </Stack>
);

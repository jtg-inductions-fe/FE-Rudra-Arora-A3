import { Outlet } from 'react-router-dom';

import { StyledStack } from './Auth.styles';

export const AuthLayout = () => (
    <StyledStack>
        <Outlet />
    </StyledStack>
);

import { Outlet } from 'react-router-dom';

import { StyledStack } from './Auth.styles';

const AuthLayout = () => (
    <StyledStack>
        <Outlet />
    </StyledStack>
);

export default AuthLayout;

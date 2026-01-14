import { Outlet } from 'react-router-dom';

import { Header } from '@containers';

import { StyledStack } from './Auth.styles';

const AuthLayout = () => (
    <StyledStack>
        <Header />
        <Outlet />
    </StyledStack>
);

export default AuthLayout;

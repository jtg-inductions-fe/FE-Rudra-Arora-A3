import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '@components';
import { Error } from '@pages';

import { StyledStack } from './Auth.styles';

const AuthLayout = () => (
    <ErrorBoundary fallback={<Error />}>
        <StyledStack>
            <Outlet />
        </StyledStack>
    </ErrorBoundary>
);

export default AuthLayout;

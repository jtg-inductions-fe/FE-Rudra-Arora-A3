import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app';
import { ROUTES } from '@constants';
import { ProtectedRouteProps } from '@types';

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@app';
import { ROUTES } from '@constants';
import { GuestRouteProps } from '@types';

const GuestRoute = ({ children }: GuestRouteProps) => {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    return isLoggedIn ? <Navigate to={ROUTES.ROOT} /> : children;
};

export default GuestRoute;

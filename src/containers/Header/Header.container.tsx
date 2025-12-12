import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@app';
import logo from '@assets/images/logo.svg';
import { AppBar } from '@components';
import { ROUTES } from '@constants';
import { setUser } from '@features';
import { useLazyGetUserProfileQuery } from '@services';

const Header = () => {
    const { isLoggedin } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [trigger, { isLoading }] = useLazyGetUserProfileQuery();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await trigger().unwrap();
                dispatch(setUser(response));
            } catch {
                void navigate(ROUTES.LOGIN, { replace: true });
            }
        };

        if (isLoggedin) {
            void fetchUser();
        }
    }, [isLoggedin, trigger]);

    const userData = useAppSelector((state) => state.user);

    const initials: string = userData.name.charAt(0).toUpperCase();

    return (
        <AppBar
            buttonUrl={ROUTES.LOGIN}
            logoUrl={ROUTES.ROOT}
            logo={logo}
            buttonLabel="Login"
            userInitials={initials}
            isLoading={isLoading}
            isLoggedin={isLoggedin}
        />
    );
};

export default Header;

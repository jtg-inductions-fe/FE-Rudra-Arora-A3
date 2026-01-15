import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@app';
import logo from '@assets/images/logo.svg';
import { AppBar } from '@components';
import { ROUTES } from '@constants';
import { setUser } from '@features';
import { useLazyGetUserProfileQuery } from '@services';

const Header = () => {
    const { isLoggedIn } = useAppSelector((state) => state.auth);
    const user = useAppSelector((state) => state.user.name);

    const dispatch = useAppDispatch();

    const [trigger, { isLoading, error }] = useLazyGetUserProfileQuery();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await trigger().unwrap();
            dispatch(setUser(response));
        };

        if (isLoggedIn && !user) {
            void fetchUser();
        }
    }, [isLoggedIn, error]);

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
            isLoggedIn={isLoggedIn}
        />
    );
};

export default Header;

import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';

import { showSnackbar, syncAuthState } from '@features';
import { Dispatch } from '@reduxjs/toolkit';

import { ROUTES } from './Routes.constant';

export const GET_AVATAR_MENU_CONFIG = (
    navigate: NavigateFunction,
    dispatch: Dispatch,
) => [
    {
        label: 'Profile',
        onClick: () => {
            void navigate(ROUTES.PROFILE);
        },
    },
    {
        label: 'Logout',
        onClick: () => {
            Cookies.remove('access');
            Cookies.remove('refresh');
            dispatch(syncAuthState(!!Cookies.get('refresh')));
            dispatch(
                showSnackbar({
                    message: ['Logout Successful'],
                    variant: 'info',
                }),
            );
        },
    },
];

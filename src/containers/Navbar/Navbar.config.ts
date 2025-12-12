import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';

import { NavConfigType, TopNavConfigType } from '@components';
import { ROUTES } from '@constants';

export const MobileNavbarConfig: NavConfigType[] = [
    {
        label: 'Movies',
        icon: MovieIcon,
        to: ROUTES.MOVIES,
    },
    {
        label: 'Cinemas',
        icon: TheatersIcon,
        to: ROUTES.CINEMAS,
    },
];

export const DesktopNavbarConfig: TopNavConfigType[] = [
    {
        label: 'Movies',
        to: ROUTES.MOVIES,
    },
    {
        label: 'Cinemas',
        to: ROUTES.CINEMAS,
    },
];

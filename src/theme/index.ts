import { createTheme } from '@mui/material/styles';

import { SCALING_FACTOR } from '@constants';

/* Customized MUI components themes */
import { components } from './components';
/* Customized foundation themes */
import { breakpoints, mixins, palette, typography } from './foundations';

/* 
Initialize the theme with base theme elements (excluding typography styles and spacing to ensure the theme has correct breakpoints and pxToRem function set.)
*/
let theme = createTheme({
    palette,
    breakpoints,
    mixins,
    components,
    typography: {
        fontFamily: 'Inter',
        ...typography.typographyUtil,
    },
    spacing: (factor: number) =>
        theme.typography.pxToRem(factor * SCALING_FACTOR),
});

/* Extend the base theme with additional configurations */
theme = createTheme(theme, {
    typography: {
        ...typography.typographyStyle(theme),
    },
    components: {
        ...theme.components,
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: theme.typography.pxToRem(10),
                    padding: theme.spacing(2, 7),
                    [theme.breakpoints.up('md')]: {
                        fontSize: theme.typography.pxToRem(20),
                    },
                },
                outlined: {
                    borderRadius: theme.typography.pxToRem(0),
                },
            },
        },
    },
});

export { theme };

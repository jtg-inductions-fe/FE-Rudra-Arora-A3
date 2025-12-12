import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constants';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

// TODO: Add the necessary typographies here.
/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    h1: {
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(45),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(45),
            lineHeight: typographyUtil.pxToRem(67),
        },
    },

    h2: {
        fontSize: typographyUtil.pxToRem(25),
        fontWeight: 600,
        lineHeight: typographyUtil.pxToRem(37),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(38),
            lineHeight: typographyUtil.pxToRem(57),
        },
    },

    h3: {
        fontSize: typographyUtil.pxToRem(20),
        fontWeight: 500,
        lineHeight: typographyUtil.pxToRem(30),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(30),
            lineHeight: typographyUtil.pxToRem(45),
        },
    },
});

export const typography = { typographyStyle, typographyUtil };

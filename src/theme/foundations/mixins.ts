import type {
    CSSProperties,
    MixinsOptions,
} from '@mui/material/styles/createMixins';

/**
 * Creates a CSS block for clamping text to a specified number of lines
 * @param lines - Number of Lines to clamp
 * @returns Returns Line clamp CSS properties
 */
const lineClamp = (lines: number = 1): CSSProperties => ({
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
});

const flexCenter = (
    direction: CSSProperties['flexDirection'] = 'row',
): CSSProperties => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: direction,
});

const flex = (
    justify: CSSProperties['justifyContent'] = 'flex-start',
    align: CSSProperties['alignItems'] = 'stretch',
    gapping: CSSProperties['gap'] = '0px',
    direction: CSSProperties['flexDirection'] = 'row',
): CSSProperties => ({
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    gap: gapping,
    flexDirection: direction,
});

export const mixins: MixinsOptions = {
    lineClamp,
    flex,
    flexCenter,
};

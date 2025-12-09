export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flex: (
            justify?: CSSProperties['justifyContent'],
            align?: CSSProperties['alignItems'],
            gapping?: CSSProperties['gap'],
            direction?: CSSProperties['flexDirection'],
        ) => CSSProperties;
        flexCenter: (
            direction?: CSSProperties['flexDirection'],
        ) => CSSProperties;
    }
}

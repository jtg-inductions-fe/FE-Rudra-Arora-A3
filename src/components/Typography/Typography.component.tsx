import { useEffect, useRef, useState } from 'react';

import { Tooltip, Typography as MuiTypography, useTheme } from '@mui/material';

import { CustomTypographyProps } from './Typography.types';

const Typography = ({
    linesToClamp,
    children,
    showTooltip = false,
    noWrap = false,
    ...rest
}: CustomTypographyProps) => {
    const theme = useTheme();

    const textReference = useRef<HTMLElement | null>(null);

    const [isClamped, setIsClamped] = useState(false);

    const checkOverflow = () => {
        const element = textReference.current;
        if (!element) {
            return;
        }

        const isOverFlowing = noWrap
            ? element.scrollWidth > element.clientWidth
            : element.scrollHeight > element.clientHeight;

        setIsClamped(isOverFlowing);
    };

    useEffect(() => {
        checkOverflow();

        const element = textReference.current;
        if (!element) return;

        const parentElement = element.parentElement;
        if (!parentElement) return;

        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });

        resizeObserver.observe(parentElement);

        return () => resizeObserver.disconnect();
    }, [linesToClamp, noWrap, children]);

    const typographyElement = (
        <MuiTypography
            ref={textReference}
            {...rest}
            sx={{ ...(linesToClamp && theme.mixins.lineClamp(linesToClamp)) }}
            noWrap={noWrap}
        >
            {children}
        </MuiTypography>
    );

    if (showTooltip && isClamped) {
        return (
            <Tooltip
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -15],
                                },
                            },
                        ],
                    },
                }}
                title={children}
                arrow
                placement="top-start"
            >
                {typographyElement}
            </Tooltip>
        );
    }

    return typographyElement;
};

export default Typography;

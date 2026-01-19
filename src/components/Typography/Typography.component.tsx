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

    const typographyElement = (
        <MuiTypography
            {...rest}
            sx={{ ...(linesToClamp && theme.mixins.lineClamp(linesToClamp)) }}
            noWrap={noWrap}
        >
            {children}
        </MuiTypography>
    );

    if (showTooltip) {
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

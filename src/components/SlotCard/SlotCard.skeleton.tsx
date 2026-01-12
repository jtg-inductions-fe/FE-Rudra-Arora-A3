import { Card, Skeleton, Stack, useTheme } from '@mui/material';

const SlotCardSkeleton = () => {
    const { typography, spacing } = useTheme();
    return (
        <Card
            component={Stack}
            gap={spacing(30)}
            flexDirection="row"
            padding={spacing(5)}
        >
            <Skeleton width={typography.pxToRem(100)} variant="text" />
            <Skeleton
                width={typography.pxToRem(80)}
                height={typography.pxToRem(40)}
                variant="rectangular"
            />
        </Card>
    );
};

export default SlotCardSkeleton;

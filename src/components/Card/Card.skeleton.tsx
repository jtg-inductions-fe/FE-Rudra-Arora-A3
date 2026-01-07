import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Stack,
    useTheme,
} from '@mui/material';

const CardSkeleton = () => {
    const { typography } = useTheme();
    return (
        <Card>
            <CardMedia sx={{ height: typography.pxToRem(100) }}>
                <Skeleton variant="rectangular" height="100%" />
            </CardMedia>
            <CardContent component={Stack} gap="10px">
                <Stack gap="10px">
                    <Skeleton
                        variant="rectangular"
                        width={typography.pxToRem(100)}
                    />
                    <Skeleton
                        variant="rectangular"
                        width={typography.pxToRem(100)}
                    />
                </Stack>

                <Stack alignItems="center">
                    <Skeleton
                        height={typography.pxToRem(30)}
                        width={typography.pxToRem(80)}
                        variant="rounded"
                    />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CardSkeleton;

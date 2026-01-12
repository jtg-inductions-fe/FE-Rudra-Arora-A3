import { Skeleton, Stack, useTheme } from '@mui/material';

import { ImageContainer, StyledStack } from './MovieDetail.styles';

const MovieDetailSkeleton = () => {
    const { typography, spacing } = useTheme();
    return (
        <StyledStack>
            <ImageContainer>
                <Skeleton width="100%" height="100%" />
            </ImageContainer>

            <Stack gap={spacing(5)} width="80%" alignItems="flex-start">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                        key={index}
                        width={typography.pxToRem(200)}
                        variant="rectangular"
                    />
                ))}

                <Skeleton
                    width={typography.pxToRem(100)}
                    height={typography.pxToRem(40)}
                    variant="rounded"
                />
            </Stack>
        </StyledStack>
    );
};

export default MovieDetailSkeleton;

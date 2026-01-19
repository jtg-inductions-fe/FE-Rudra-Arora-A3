import { Box, Stack } from '@mui/material';

import noDataImage from '@assets/images/nodata.webp';

const NoData = () => (
    <Stack minHeight="70dvh" justifyContent="center" alignItems="center">
        <Box maxWidth="40%">
            <Box
                component="img"
                width="100%"
                height="100%"
                src={noDataImage}
                alt="Data Not Found"
            />
        </Box>
    </Stack>
);

export default NoData;

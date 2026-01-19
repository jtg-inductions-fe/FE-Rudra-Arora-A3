import { Divider, Stack } from '@mui/material';

import { ProfileContainer, PurchaseHistoryContainer } from '@containers';

const Profile = () => (
    <Stack component="section" aria-label="Profile">
        <ProfileContainer />

        <Divider />

        <PurchaseHistoryContainer />
    </Stack>
);

export default Profile;

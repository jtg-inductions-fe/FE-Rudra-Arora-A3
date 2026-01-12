import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Box, Button, Stack, TextField, useTheme } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@app';
import { Typography } from '@components';
import { FORM_FIELDS } from '@constants';
import { setUser } from '@features';
import { useUserUpdateMutation } from '@services';
import { FormValues } from '@types';

const ProfileConatiner = () => {
    const [isEditing, setIsEditing] = useState(false);
    const user = useAppSelector((state) => state.user);
    const [updateUser, { isLoading }] = useUserUpdateMutation();
    const dispatch = useAppDispatch();
    const { spacing } = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<FormValues>({
        values: { name: user.name, phone_number: user.phone_number },
    });

    const onSubmit = async (data: FormValues) => {
        const response = await updateUser(data).unwrap();
        dispatch(setUser(response));
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <Box pb={2}>
            {isEditing ? (
                <Stack
                    component="form"
                    spacing={2}
                    onSubmit={(e) => {
                        void handleSubmit(onSubmit)(e);
                    }}
                >
                    {FORM_FIELDS.map(({ name, label, rules }) => (
                        <TextField
                            key={name}
                            label={label}
                            error={!!errors[name]}
                            helperText={errors[name]?.message}
                            fullWidth
                            {...register(name, rules)}
                        />
                    ))}

                    <TextField
                        label="Email"
                        value={user.email}
                        disabled
                        fullWidth
                    />

                    <Stack
                        direction="row"
                        spacing={1}
                        justifyContent="flex-end"
                    >
                        <Button
                            variant="outlined"
                            onClick={handleCancel}
                            disabled={isLoading}
                        >
                            Cancel
                        </Button>
                        {isDirty && (
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={isLoading}
                            >
                                Save
                            </Button>
                        )}
                    </Stack>
                </Stack>
            ) : (
                <Stack spacing={1}>
                    <Typography variant="h3">{user.name}</Typography>
                    <Typography variant="h3">{user.email}</Typography>
                    <Typography variant="h3">{user.phone_number}</Typography>

                    <Button
                        variant="contained"
                        sx={{ alignSelf: 'center', mt: spacing(1) }}
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </Button>
                </Stack>
            )}
        </Box>
    );
};

export default ProfileConatiner;

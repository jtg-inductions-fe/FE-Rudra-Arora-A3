import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { Button, Paper, Stack, TextField, useTheme } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@app';
import { Typography } from '@components';
import { FORM_FIELDS } from '@constants';
import { setUser, showSnackbar } from '@features';
import { useUserUpdateMutation } from '@services';
import { FormValues } from '@types';

const ProfileContainer = () => {
    const [isEditing, setIsEditing] = useState(false);
    const user = useAppSelector((state) => state.user);
    const [updateUser, { isLoading }] = useUserUpdateMutation();
    const dispatch = useAppDispatch();
    const theme = useTheme();

    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        formState: { errors, isDirty },
    } = useForm<FormValues>({
        values: {
            name: user.name,
            phone_number: user.phone_number,
        },
    });

    useEffect(() => {
        if (isEditing) {
            setFocus('name');
        }
    }, [isEditing]);

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await updateUser(data).unwrap();
            dispatch(setUser(response));
            setIsEditing(false);
        } catch (error) {
            const errorData = (error as { data: Record<string, string[]> })
                .data;
            dispatch(
                showSnackbar({
                    message: errorData.phone_number,
                    variant: 'error',
                }),
            );
        }
    };

    const handleCancel = () => {
        reset();
        setIsEditing(false);
    };

    return (
        <Paper
            elevation={1}
            sx={{
                padding: theme.spacing(2),
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
            }}
        >
            <Typography marginBottom={3} variant="h4">
                Profile
            </Typography>
            <Stack
                spacing={3}
                component="form"
                onSubmit={(e) => {
                    void handleSubmit(onSubmit)(e);
                }}
                padding={theme.spacing(2)}
            >
                {FORM_FIELDS.map(({ name, label, rules }) => (
                    <TextField
                        key={name}
                        label={label}
                        fullWidth
                        variant="outlined"
                        error={!!errors[name]}
                        helperText={errors[name]?.message}
                        slotProps={{
                            input: {
                                readOnly: !isEditing,
                            },
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                        {...register(name, rules)}
                    />
                ))}

                <TextField
                    label="Email"
                    value={user.email}
                    disabled
                    fullWidth
                />

                <Stack direction="row" spacing={1} justifyContent="center">
                    {isEditing ? (
                        <>
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
                        </>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </Button>
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};

export default ProfileContainer;

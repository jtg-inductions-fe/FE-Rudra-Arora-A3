import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { ErrorMessage } from './Form.constants';
import {
    AuthImageBox,
    CustomTextField,
    FormStack,
    StyledStack,
} from './Form.styles';
import { FormProps, PayloadType } from './Form.types';
import authImage from '../../assets/images/authimage.webp';

const Form = ({ title, fields, link, onSubmit }: FormProps) => {
    const [showPassword, setShowPassword] = useState<Record<string, boolean>>(
        {},
    );

    const handleClickShowPassword = (fieldName: string) => {
        setShowPassword((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<PayloadType>();

    const password = watch('password');
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <StyledStack>
            {isTablet && (
                <AuthImageBox>
                    <Box
                        component="img"
                        src={authImage}
                        width="100%"
                        height="100%"
                        alt="Authentication illustration"
                    />
                </AuthImageBox>
            )}
            <FormStack>
                <Typography variant="h1">{title}</Typography>

                <form
                    onSubmit={(e) => {
                        void handleSubmit(onSubmit)(e);
                    }}
                    style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: theme.spacing(5),
                    }}
                >
                    {fields.map((field) => (
                        <CustomTextField
                            key={field.name}
                            type={
                                field.type === 'password'
                                    ? showPassword[field.name]
                                        ? 'text'
                                        : 'password'
                                    : field.type
                            }
                            fullWidth
                            label={field.label}
                            size={isDesktop ? 'medium' : 'small'}
                            error={!!errors[field.name]}
                            helperText={errors[field.name]?.message as string}
                            slotProps={{
                                input:
                                    field.type === 'password'
                                        ? {
                                              endAdornment: (
                                                  <InputAdornment position="end">
                                                      <IconButton
                                                          onClick={() =>
                                                              handleClickShowPassword(
                                                                  field.name,
                                                              )
                                                          }
                                                          edge="end"
                                                      >
                                                          {showPassword[
                                                              field.name
                                                          ] ? (
                                                              <VisibilityOff color="primary" />
                                                          ) : (
                                                              <Visibility color="primary" />
                                                          )}
                                                      </IconButton>
                                                  </InputAdornment>
                                              ),
                                          }
                                        : undefined,
                            }}
                            {...register(field.name, {
                                required: field.validation.required,
                                pattern: field.validation?.pattern,
                                maxLength: field.validation?.maxLength,
                                minLength: field.validation?.minLength,
                                ...(field.name === 'confirm_password'
                                    ? {
                                          validate: (value) =>
                                              value === password ||
                                              ErrorMessage.PASSWORD_NOT_MATCH,
                                      }
                                    : {}),
                            })}
                        />
                    ))}

                    <Stack alignItems="center" gap={3}>
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                        >
                            {title}
                        </Button>
                        <Typography variant="body2" color="textSecondary">
                            {link.message}{' '}
                            <Typography
                                sx={{ color: theme.palette.primary.main }}
                                component={Link}
                                to={link.url}
                                replace={true}
                                variant="body2"
                            >
                                {link.value}
                            </Typography>
                        </Typography>
                    </Stack>
                </form>
            </FormStack>
        </StyledStack>
    );
};

export default Form;

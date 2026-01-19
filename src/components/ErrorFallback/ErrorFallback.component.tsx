import { Button, Typography } from '@mui/material';

import { StyledBox, StyledImage } from './ErrorFallback.styles';
import { ErrorFallbackProps } from './ErrorFallback.types';

const ErrorFallback = ({
    image,
    title,
    body,
    buttonText,
    to,
}: ErrorFallbackProps) => (
    <StyledBox component="section">
        <StyledImage src={image} alt={title} />

        <Typography variant="h1">{title}</Typography>

        <Typography variant="body1" color="textSecondary">
            {body}
        </Typography>

        {buttonText && (
            <Button variant="contained" component="a" href={to}>
                {buttonText}
            </Button>
        )}
    </StyledBox>
);

export default ErrorFallback;

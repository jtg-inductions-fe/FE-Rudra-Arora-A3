import { ReactNode } from 'react';

import { useNavigate } from 'react-router-dom';
import { normalizeApiError } from 'utils';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { ErrorFallback } from '../ErrorFallback';

type ErrorBoundaryProps = {
    error?: FetchBaseQueryError | SerializedError;
    children: ReactNode;
};

const ErrorBoundary = ({ error, children }: ErrorBoundaryProps) => {
    const navigate = useNavigate();
    if (!error) return <>{children}</>;

    const fallbackProps = normalizeApiError(error);

    if (fallbackProps.navigationLink) {
        void navigate(fallbackProps.navigationLink, { replace: true });
    }
    return <ErrorFallback {...fallbackProps} />;
};

export default ErrorBoundary;

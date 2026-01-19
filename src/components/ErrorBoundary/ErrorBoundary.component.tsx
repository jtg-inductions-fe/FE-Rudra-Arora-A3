import { ReactNode } from 'react';

import { normalizeApiError } from 'utils';

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { ErrorFallback } from '../ErrorFallback';

type ErrorBoundaryProps = {
    error?: FetchBaseQueryError | SerializedError;
    children: ReactNode;
};

const ErrorBoundary = ({ error, children }: ErrorBoundaryProps) => {
    if (!error) return <>{children}</>;

    const fallbackProps = normalizeApiError(error);

    return <ErrorFallback {...fallbackProps} />;
};

export default ErrorBoundary;

import errorBackgroundImage from '@assets/images/internal-error-bg.webp';
import { ErrorFallback } from '@components';
import { ERROR_PAGE_CONSTANTS } from '@constants';

const Error = () => (
    <ErrorFallback
        image={errorBackgroundImage}
        title={ERROR_PAGE_CONSTANTS.TITLE}
        body={ERROR_PAGE_CONSTANTS.BODY}
    />
);

export default Error;

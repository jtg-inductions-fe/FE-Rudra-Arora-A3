import errorBackgroundImage from '@assets/images/internal-error-bg.webp';
import { ErrorFallback } from '@components';
import { ErrorPageConstants } from '@constants';

const Error = () => (
    <ErrorFallback
        image={errorBackgroundImage}
        title={ErrorPageConstants.TITLE}
        body={ErrorPageConstants.BODY}
    />
);

export default Error

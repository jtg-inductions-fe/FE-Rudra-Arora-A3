import notFoundImage from '@assets/images/notfoundbg.webp';
import { ErrorFallback } from '@components';
import { ROUTES } from '@constants';
import { NOT_FOUND_CONSTANTS } from '@constants';

const NotFound = () => (
    <ErrorFallback
        image={notFoundImage}
        title={NOT_FOUND_CONSTANTS.TITLE}
        body={NOT_FOUND_CONSTANTS.BODY}
        buttonText={NOT_FOUND_CONSTANTS.BUTTON_TEXT}
        to={ROUTES.ROOT}
    />
);

export default NotFound;

import notFoundImage from '@assets/images/notfoundbg.webp';
import { ErrorFallback } from '@components';
import { ROUTES } from '@constants';
import { NotFoundConstants } from '@constants';

const NotFound = () => (
    <ErrorFallback
        image={notFoundImage}
        title={NotFoundConstants.TITLE}
        body={NotFoundConstants.BODY}
        buttonText={NotFoundConstants.BUTTON_TEXT}
        to={ROUTES.ROOT}
    />
);

export default NotFound

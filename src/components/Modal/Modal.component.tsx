import { Button, Modal as MuiModal, Stack } from '@mui/material';

import { ModalStack } from './Modal.styles';
import { ModalProps } from './Modal.types';
import { Typography } from '../Typography';

const Modal = ({
    openModal,
    handleCloseModal,
    labels,
    title,
    subtitle1,
    subtitle2,
    handleButtonClick,
    keys,
    buttonText,
}: ModalProps) => (
    <MuiModal open={openModal} onClose={handleCloseModal}>
        <ModalStack>
            <Typography variant="h2">{title}</Typography>

            <Typography variant="h2">{subtitle1}</Typography>

            <Stack direction="row" gap={2}>
                <Typography variant="subtitle1">{keys.first}:</Typography>

                <Typography variant="subtitle1">{labels.join(', ')}</Typography>
            </Stack>

            <Stack direction="row" gap={2}>
                <Typography variant="subtitle1">{keys.second}:</Typography>

                <Typography variant="subtitle1">
                    ₹ {Number(subtitle2) * labels.length}
                </Typography>
            </Stack>

            <Button
                onClick={() => void handleButtonClick()}
                variant="contained"
            >
                {buttonText}
            </Button>
        </ModalStack>
    </MuiModal>
);

export default Modal;

export type ModalProps = {
    openModal: boolean;
    handleCloseModal: () => void;
    labels: string[];
    title?: string;
    subtitle1?: string;
    subtitle2?: string;
    handleButtonClick: () => Promise<void> | void;
    buttonText: string;
    keys: Record<string, string>;
    isLoading: boolean;
};

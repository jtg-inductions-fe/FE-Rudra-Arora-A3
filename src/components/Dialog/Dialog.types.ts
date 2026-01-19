export type DialogDataType = {
    title: string;
};

export type DialogProps = {
    open: boolean;
    DialogListData: Record<string, DialogDataType[] | undefined>;
    ListHeading: string[];
    selectedCheckedBox: Record<string, Set<string> | string>;
    buttonText1: string;
    buttonText2: string;
    /**
     * Funtion to close the Dialog
     */
    handleClose: () => void;

    /**
     * Function for handling checkboxes state
     * @param event
     * @param item
     * @param heading
     */
    handleCheckBox: (
        event: React.ChangeEvent<HTMLInputElement>,
        item: string,
        heading: string,
    ) => void;

    /**
     * Function for handling the button behaviour in the Dialog component
     */
    handleButtonClick: () => void;
    handleClearButton: () => void;
};

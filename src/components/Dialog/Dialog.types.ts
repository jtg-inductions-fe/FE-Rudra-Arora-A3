export type DialogDataType = {
    title: string;
};

export type DialogProps = {
    open: boolean;
    handleClose: () => void;
    DialogListData: Record<string, DialogDataType[] | undefined>;
    ListHeading: string[];
    selectedCheckedBox: Record<string, Set<string>>;
    handleCheckBox: (
        event: React.ChangeEvent<HTMLInputElement>,
        item: string,
        heading: string,
    ) => void;
    handleButtonClick: () => void;
    buttonText: string;
};

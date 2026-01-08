import { DialogDataType } from '../Dialog';

export type AccordionProps = {
    Details: Record<string, DialogDataType[] | undefined>;
    selectedItem: Record<string, Set<string> | string>;
    title: string;
    handleItemsSelected: (
        event: React.ChangeEvent<HTMLInputElement>,
        item: string,
        title: string,
    ) => void;
};

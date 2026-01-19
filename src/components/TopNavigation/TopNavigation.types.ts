export interface TopNavConfigType {
    label: string;
    to: string;
}

export type TopNavigationProps = {
    NavConfig: TopNavConfigType[];
};

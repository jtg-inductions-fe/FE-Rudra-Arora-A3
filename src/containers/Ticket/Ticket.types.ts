import { CardComponentProps } from '@components';

export type TicketContainerProps = {
    subtitle3: string;
    heading: string;
    linkUrl?: string;
} & Pick<
    CardComponentProps,
    'title' | 'subtitle1' | 'subtitle2' | 'buttonText' | 'id'
>;

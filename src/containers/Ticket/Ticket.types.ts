import { CardComponentProps } from 'components/Card/Card.types';

export type TicketContainerProps = {
    subtitle3: string;
} & Pick<
    CardComponentProps,
    'title' | 'subtitle1' | 'subtitle2' | 'buttonText' | 'buttonUrl' | 'id'
>;

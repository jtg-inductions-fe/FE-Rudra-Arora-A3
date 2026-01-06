import { CardDataType } from 'components/Card/Card.types';

export type LatestMoviesProps = {
    data?: CardDataType[];
    isLoading: boolean;
    endRef: React.RefObject<HTMLDivElement | null>;
};

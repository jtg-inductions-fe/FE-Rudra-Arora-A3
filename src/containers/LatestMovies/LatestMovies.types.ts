import { CardDataType } from 'components/Card/Card.types';

export type LatestMoviesProps = {
    data?: CardDataType[];
    isFetching: boolean;
    endRef: React.RefObject<HTMLDivElement | null>;
};

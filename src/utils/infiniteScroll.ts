import { useEffect, useRef } from 'react';

type InfiniteScrollProps = {
    onLoadData: () => Promise<unknown>;
    hasNextPage: boolean;
    isFetching: boolean;
    rootMargin?: string;
};

export const useInfiniteScroll = ({
    hasNextPage,
    isFetching,
    onLoadData,
    rootMargin = '150px',
}: InfiniteScrollProps) => {
    const reference = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!hasNextPage) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isFetching) {
                    void onLoadData();
                }
            },
            { rootMargin },
        );

        const element = reference.current;

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [rootMargin, onLoadData, isFetching, hasNextPage]);

    return reference;
};

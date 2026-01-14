import { RootState } from './store';

export const selectGlobalApiError = (state: RootState) => {
    const queries = state.api.queries;

    for (const key in queries) {
        const query = queries[key];
        if (query?.error) return query.error;
    }
};

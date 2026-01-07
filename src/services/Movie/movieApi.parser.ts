import { toCapitalized } from 'utils';

import { CardDataType } from '@components';
import { MovieDataType } from '@types';

export const parseMovie = (movie: MovieDataType): CardDataType => ({
    id: movie.id,
    title: movie.name,
    subtitle1: movie.languages.map((item) => toCapitalized(item)).join(', '),
    subtitle2: movie.genres.map((item) => toCapitalized(item)).join(', '),
});

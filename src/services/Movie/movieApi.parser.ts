import { toCapitalized } from 'utils';

import { CardDataType, DialogDataType } from '@components';
import { GenreFilterType, LanguageFilterType, MovieDataType } from '@types';

export const parseMovie = (movie: MovieDataType): CardDataType => ({
    id: movie.id,
    title: movie.name,
    subtitle1: movie.languages.map((item) => toCapitalized(item)).join(', '),
    subtitle2: movie.genres.map((item) => toCapitalized(item)).join(', '),
    slug: movie.slug,
});

export const parseLanguageFilter = (
    language: LanguageFilterType,
): DialogDataType => ({
    title: language.language,
});

export const parseGenreFilter = (genre: GenreFilterType): DialogDataType => ({
    title: genre.genre,
});

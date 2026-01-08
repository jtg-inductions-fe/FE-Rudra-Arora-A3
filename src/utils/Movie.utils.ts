import { toCapitalized } from './toCapitalized.util';

export const GenreFormatter = (genre: string[]): string => {
    const formatedGenre = genre.map((item) => toCapitalized(item)).join(' | ');
    return formatedGenre;
};

export const LanguageFormatter = (language: string[]): string => {
    const formattedLanguage = language
        .map((item) => toCapitalized(item))
        .join(', ');
    return formattedLanguage;
};

export const DurationFormatter = (duration: string): string => {
    const durationParts = duration.split(':');

    const hours = parseInt(durationParts[0], 10);
    const minutes = parseInt(durationParts[1], 10);

    let formattedDuration = 0;

    if (hours > 0) {
        formattedDuration += hours * 60;
    }

    if (minutes > 0) {
        formattedDuration += minutes;
    }

    return `${formattedDuration} min`;
};

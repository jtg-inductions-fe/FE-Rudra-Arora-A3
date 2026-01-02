import { toPascalCase } from 'utils';

import { CardDataType, DialogDataType } from '@components';
import { CinemaDataType, LocationFilterType } from '@types';

export const cinemaApiParser = (cinema: CinemaDataType): CardDataType => ({
    id: cinema.id,
    title: `${toPascalCase(cinema.name)} ${toPascalCase(cinema.location)}`,
    subtitle1: toPascalCase(cinema.location),
});

export const parseLocationFilter = (
    location: LocationFilterType,
): DialogDataType => ({
    title: location.city,
});

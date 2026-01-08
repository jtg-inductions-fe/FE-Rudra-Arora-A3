import { toCapitalized } from 'utils';

import { CardDataType, DialogDataType } from '@components';
import { CinemaDataType, LocationFilterType } from '@types';

export const cinemaApiParser = (cinema: CinemaDataType): CardDataType => ({
    id: cinema.id,
    title: `${toCapitalized(cinema.name)} ${toCapitalized(cinema.location)}`,
    subtitle1: toCapitalized(cinema.location),
});

export const parseLocationFilter = (
    location: LocationFilterType,
): DialogDataType => ({
    title: location.city,
});

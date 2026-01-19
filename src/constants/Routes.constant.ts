export const BACKEND_URL = {
    LOGIN: 'login/',
    SIGNUP: 'signup/',
    USER_PROFILE: 'me/',
    TOKEN_REFRESH: 'token/refresh/',
    PURCHASE_HISTORY: 'purchase-history/',

    MOVIES: 'movies/',
    LANGUAGE: 'movies/languages/',
    GENRE: 'movies/genres/',
    GET_MOVIES_SLOTS: (id: number) => `movies/${id}/slots/`,
    GET_SPECIFIC_MOVIE: (slug: string) => `movies/${slug}/`,

    CINEMAS: 'cinemas/',
    LOCATION: 'cinemas/locations/',
    GET_CINEMAS_SLOTS: (id: number) => `cinemas/${id}/slots/`,
    GET_SPECIFIC_CINEMA: (slug: string) => `cinemas/${slug}/`,

    GET_SEAT_BOOKING: (id: number) => `slots/${id}/bookings/`,
    GET_SEAT_AVAILABILITY: (id: number) => `slots/${id}/seats/`,
    GET_CANCEL_BOOKING: (id: number) => `slots/bookings/${id}/`,
};

export const ROUTES = {
    ROOT: '/',
    LOGIN: '/login',
    BOOKING: 'booking',
    SIGNUP: '/signup',
    CINEMAS: '/cinemas',
    MOVIES: '/movies',
    PROFILE: '/profile',
    SLOTS: '/slots',
    PURCHASE_HISTORY: 'purchase-history',
    SPECIFIC_MOVIE: 'movies/:slug',
    MOVIE_SLOTS: '/movies/:slug/slots',
    CINEMA_SLOTS: '/cinemas/:slug/slots',
    SEAT_AVAILABILITY: '/slots/:id/seats',
    GET_SEAT_AVAILABILITY: (id: number) => `/slots/${id}/seats`,
};

export const AUTHENTICATED_ENDPOINTS: string[] = [
    'getUserProfile',
    'seatBooking',
    'userUpdate',
    'getPurchaseHistory',
    'seatCancel',
];

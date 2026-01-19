export const BACKEND_URL = {
    LOGIN: 'login/',
    SIGNUP: 'signup/',
    USER_PROFILE: 'me/',
    TOKEN_REFRESH: 'token/refresh/',
    MOVIES: 'movies/',
    LANGUAGE: 'movies/languages/',
    GENRE: 'movies/genres/',
    GET_SEAT_BOOKING: (id: number) => `slots/${id}/bookings/`,
    PURCHASE_HISTORY: 'purchase-history/',
    GET_SEAT_CANCEL: (id: number) => `slots/bookings/${id}/`,
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
    SPECIFIC_MOVIE: 'movies/:movie_name',
    MOVIE_SLOTS: '/movies/:slug/slots',
    CINEMA_SLOTS: '/cinemas/:slug/slots',
    SEAT_AVAILABILITY: '/slots/:id/seats/',
};

export const AUTHENTICATED_ENDPOINTS: string[] = [
    'getUserProfile',
    'seatBooking',
    'userUpdate',
    'getPurchaseHistory',
    'seatCancel',
];

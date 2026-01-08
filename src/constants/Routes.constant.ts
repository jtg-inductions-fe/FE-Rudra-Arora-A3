export const BACKEND_URL = {
    LOGIN: 'users/login/',
    SIGNUP: 'users/signup/',
    USER_PROFILE: 'users/me/',
    TOKEN_REFRESH: 'users/token/refresh/',
    MOVIES: 'movies/',
    LANGUAGE: 'movies/languages/',
    GENRE: 'movies/genres/',
};

export const ROUTES = {
    ROOT: '/',
    LOGIN: '/login',
    BOOKING: 'booking',
    SIGNUP: '/signup',
    CINEMAS: '/cinemas',
    MOVIES: '/movies',
    PROFILE: 'profile',
    SLOTS: '/slots',
    PURCHASE_HISTORY: 'purchase-history',
    SPECIFIC_MOVIE: 'movies/:movie_name',
    MOVIE_SLOTS: '/movies/:slug/slots',
    CINEMA_SLOTS: '/cinemas/:slug/slots',
};

export const AUTHENTICATED_ENDPOINTS = ['getUserProfile'];

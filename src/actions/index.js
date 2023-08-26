//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';

//action creators
export function addMovies(movies) {
    return {
        type : ADD_MOVIES,
        movies
    }
}
export function addFavourite(movie){
    return {
        type : ADD_FAVOURITES,
        movie
    }
}

export function removeFavourite(favourite) {
    return {
        type : REMOVE_FAVOURITE,
        favourite
    }
}

export function showFavourite(value) {
    return {
        type : SHOW_FAVOURITE,
        value
    }
}

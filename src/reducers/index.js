import { ADD_FAVOURITES, ADD_MOVIES, REMOVE_FAVOURITE, SHOW_FAVOURITE } from "../actions";

const initialState = {
    list : [],
    favourite : [],
    showFavourite : false
}

export default function movies(state = initialState, action){
    switch(action.type) {
        case ADD_MOVIES :
            return {
                ...state,
                list : action.movies
            }
        case ADD_FAVOURITES :
            return {
                ...state,
                favourite : [action.movie, ...state.favourite]
            }
        case REMOVE_FAVOURITE :
            return {
                ...state,
                favourite : action.favourite
            }
        case SHOW_FAVOURITE :
            return {
                ...state,
                showFavourite : action.value
            }
        default :
            return state;
    }
}
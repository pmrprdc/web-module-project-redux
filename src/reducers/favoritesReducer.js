import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions';
import movies from './../data.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state=initialState, action) => {
    
    switch(action.type) {
       case ADD_FAVORITE:
            return {...state,
            favorites: [...state.favorites, {title: action.payload.title, id: action.payload.id }]
            }
        case REMOVE_FAVORITE:
            return {...state, 
            favorites: state.favorites.filter(x=>x.id!==action.payload)}
        default:
            return (state);
    }
}

export default favoritesReducer;
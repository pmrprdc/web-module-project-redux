import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state=initialState, action) => {
    
    switch(action.type) {
        case ADD_MOVIE:
            
            const newMovie = {...action.payload, id: Date.now() }
            return {
                ...state,
                movies: [...state.movies, newMovie]
            }
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id)),
                appTitle: state.appTitle
            }
        default:
            return state;
    }
}

export default reducer;
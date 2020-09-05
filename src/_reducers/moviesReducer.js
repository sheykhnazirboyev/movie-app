import { FETCTH_MOVIES, GET_CONFIG, SEARCH_MOVIE, SET_PAGINATION, GET_GENRES, FETCH_MOVIE_DETAILS, GET_RECOMENDATIONS, CLEAR_MOVIE_DETAILS, SEARCH_KEYWORD, NOT_FOUND } from "../_actions/types";

const initialState = {
    movies: [],
    result:{},
    configData: null,
    baseImageUrl:null,
    page: 1,
    total_pages: 1,
    genres: [],
    search_keyword:"",
    recomendations: [],
    movie_details:{},
    error:""
};

export default function(state = initialState, action){
    switch(action.type){
        case FETCTH_MOVIES: 
            return {
                    ...state, 
                    movies: action.payload.results, 
                    page: action.payload.page, 
                    total_pages: action.payload.total_pages,
                }
        case GET_CONFIG: 
            return {
                    ...state, 
                    baseImageUrl: action.payload.images.secure_base_url, 
                    configData: action.payload.images
                }
        case SEARCH_MOVIE: 
            return {
                    ...state, 
                    movies: action.payload.results
                }
        case SEARCH_KEYWORD:
            return {...state, search_keyword: action.payload}
        case SET_PAGINATION: 
                return {
                    ...state,
                    page: action.payload
                }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case FETCH_MOVIE_DETAILS: 
        return {
            ...state,
            movie_details: action.payload
        }
        case NOT_FOUND:
            return {...state, error: action.payload}
        case GET_RECOMENDATIONS: 
            return {
                ...state,
                recomendations: action.payload.results
            }
        case CLEAR_MOVIE_DETAILS:
            return {...state, movie_details: {}, recomendations:[]}
        default: return state;
    }
}
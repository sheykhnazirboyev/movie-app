import axios from 'axios';
import { base_URL, api_key } from '../constants/api';
import { FETCTH_MOVIES, GET_CONFIG, SEARCH_MOVIE, SET_PAGINATION, GET_GENRES, FETCH_MOVIE_DETAILS, GET_RECOMENDATIONS, CLEAR_MOVIE_DETAILS, SEARCH_KEYWORD, NOT_FOUND } from './types';
import { toggleLoader } from './appActions';


export const getConfig = () => dispatch => {
    const url = `${base_URL}configuration?api_key=${api_key}`;

    axios.get(url)
        .then(res => {
            dispatch({
                type: GET_CONFIG,
                payload: res.data
            })
        })
        .catch(err => dispatch(estimateError(err)))
}


export const fetchMovies = (page, keyword) => dispatch => {
    dispatch(toggleLoader(true));
    const url = `${base_URL}movie/popular?api_key=${api_key}&page=${page}`;

    axios.get(url)
        .then(res => {
            console.log(res.data)
            dispatch(toggleLoader(false));
            dispatch({
                type: FETCTH_MOVIES,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(toggleLoader(false));
            console.log(err)
        })
}

export const searchMovie = (page, keyword) => dispatch => {

    const url = `${base_URL}search/movie?api_key=${api_key}&query=${keyword}&page=${page}`;
    dispatch({
        type: SEARCH_KEYWORD,
        payload: keyword
    });

    axios.get(url)
        .then(res => {
            console.log(res.data)
            
            dispatch({
                type: SEARCH_MOVIE,
                payload: res.data
            });
        })
        .catch(err => {
            
            console.log(err)
        })


}


export const setPagination = (val) => dispatch => {
    dispatch({
        type: SET_PAGINATION,
        payload: val
    })
}

export const getGenres = () => dispatch => {
    const url = `${base_URL}genre/movie/list?api_key=${api_key}`;
    axios.get(url)
        .then(res => {
            // Convert Genres id and name to JS Map
            const newGenres = {};
            res.data.genres.map(g => newGenres[g.id] = g.name);
            dispatch({
                type: GET_GENRES,
                payload: newGenres
            })
        })
        .catch(err => console.log(err.response))
}

export const fetchMovieDetails = (id) => dispatch => {
    dispatch(toggleLoader(true))
    const url = `${base_URL}movie/${id}?api_key=${api_key}`;

    axios.get(url)
        .then(res => {
            dispatch(getRecommendations(id));
            dispatch(toggleLoader(false))
            dispatch({
                type: FETCH_MOVIE_DETAILS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch(toggleLoader(false))
            dispatch(estimateError(err))
        })
}

export const getRecommendations = (id) => dispatch => {

    const url = `${base_URL}movie/${id}/recommendations?api_key=${api_key}`;

    axios.get(url)
        .then(res => {

            dispatch({
                type: GET_RECOMENDATIONS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const clearMovieDetails = () => dispatch => {
    dispatch({
        type: NOT_FOUND,
        payload: ""
    });
    dispatch({
        type: CLEAR_MOVIE_DETAILS,
        payload: null
    })
}

const estimateError = (err) => dispatch => {
    
    if(err.response.status === 404){
        dispatch({
            type: NOT_FOUND,
            payload: err.response.data.status_message
        });
    }
    
}
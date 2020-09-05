import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchMovieDetails } from '../_actions/movieActions';
import DetailsCard from '../Components/DetailsCard';
import {clearMovieDetails} from '../_actions/movieActions'
import Recomendations from '../Components/Recomendations/Recomendations';
import { Divider, Typography } from '@material-ui/core';

function Details(props){
    const dispatch = useDispatch();

    useEffect(() => {
        window.scroll(0, 0)
        dispatch(fetchMovieDetails(props.id))
        return () => {
            dispatch(clearMovieDetails())
        }
    },[props]);

    const movie = useSelector(state => state.movies.movie_details)
    const recomendations = useSelector(state => state.movies.recomendations);
    
    

    return(
        <div>
            <DetailsCard {...movie} />
            <Recomendations recomendations = {recomendations} />
        </div>
    );
}

export default Details;
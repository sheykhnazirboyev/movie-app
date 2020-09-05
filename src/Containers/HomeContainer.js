import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { fetchMovies } from '../_actions/movieActions';
import Grid from '@material-ui/core/Grid'
import Card from '../Components/Card';
import Pagination from '../Components/Pagination';

function HomeContainer() {
    const dispatch = useDispatch();

    const page = useSelector(state => state.movies.page)

    useEffect(() => 
        dispatch(fetchMovies(page))
    , [page])

    
    const movies = useSelector(state => state.movies.movies)

    const renderMovies = movies.map((movie, index) => 
        <Grid item key = {index} xs = {12} sm = {6} md = {3}>
            <Card {...movie} />
        </Grid>
    )
    return (
        <div>
            <Grid container spacing = {3} justify = "space-between">
                {renderMovies}
                <Grid item xs = {12}>
                    <Pagination />
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeContainer

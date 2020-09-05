import React from 'react'
import {useSelector} from 'react-redux';
import { Grid } from '@material-ui/core';
import Card from '../Card'

function Search() {
    const movies = useSelector(state => state.movies.movies)

    const renderMovies = movies.map((movie, index) => 
        <Grid item key = {index} xs = {12} sm = {6} md = {3}>
            <Card {...movie} />
        </Grid>
    )

    return (
        <div>
            <Grid container >
                {renderMovies}
            </Grid>
        </div>
    )
}

export default Search

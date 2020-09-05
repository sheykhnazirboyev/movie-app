import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import AppBar from './AppBar';
import Footer from './Footer';
import useStyles from './styles';
import Loader from '../Loader';
import { getConfig, getGenres } from '../../_actions/movieActions';
import Search from '../Search';

function Layout(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const search_keyword = useSelector(state => state.movies.search_keyword)


    useEffect(() => {
        dispatch(getConfig());
        dispatch(getGenres())
    }, [])

    return (
        <div>
            <AppBar />
            <Loader />
            <div className = {classes.content} >
                {search_keyword ? <Search /> : props.children }
                
            </div>
            <Footer />
        </div>
    )
}

export default Layout

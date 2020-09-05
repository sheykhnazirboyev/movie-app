import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import AppBar from './AppBar';
import Footer from './Footer';
import useStyles from './styles';
import Loader from '../Loader';
import { getConfig, getGenres } from '../../_actions/movieActions';

function Layout(props) {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConfig());
        dispatch(getGenres())
    }, [])

    return (
        <div>
            <AppBar />
            <Loader />
            
            <div className = {classes.content} >
                
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

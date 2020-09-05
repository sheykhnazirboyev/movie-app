import React from 'react'
import useStyles from './styles';
import { Typography, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Error() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <div className = {classes.content}>
                <Typography variant="h1" component="h2"  display = "block" 
                            gutterBottom  className = {classes.legend}>
                    404
                </Typography>
                <Typography variant = "h5" display = "block" gutterBottom className = {classes.subtitle} >
                    OOOPS SORRY WE CAN'T FIND THAT PAGE
                </Typography>
                <Typography varant = "caption"  display = "block" gutterBottom className = {classes.little}>
                        Either something went wrong or the page doesn't exist anytime
                </Typography>
                <Divider />
                <Button variant="contained" color="primary"  size = "large"  className = {classes.btn} >
                    <Link  to = "/" className = {classes.link}>
                         HOME PAGE
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Error

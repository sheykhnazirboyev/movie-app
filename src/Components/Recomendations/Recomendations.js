import React from 'react'
import Slider from "react-slick";
import Card from '../Card';
import useStyles from './styles'
import { Divider, Typography } from '@material-ui/core';

function Recomendations(props) {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: props.recomendations.length < 4 ? props.recomendations.length : 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    const classes = useStyles();
    const slides = props.recomendations &&
        props.recomendations.map((s, i) =>
            <div className={classes.slideItem} key = {i}>
                <Card {...s} />
            </div>)

    return (
        <div className={classes.divider}>
            {
                props.recomendations.length !== 0 &&
                <div>
                    <Divider className={classes.divider} />
                    <Typography className={classes.header} variant="h4">Recommended movies</Typography>
                    <Divider className={classes.divider} />
                </div>

            }

            <Slider {...settings}>
                {slides}
            </Slider>

        </div>
    )
}

export default Recomendations

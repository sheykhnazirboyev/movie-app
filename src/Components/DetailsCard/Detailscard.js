import React from 'react'
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import { Typography, Divider } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Detailscard(props) {

    const classes = useStyles();

    const baseImageUrl = useSelector(state => state.movies.baseImageUrl)
    const AllGenres = useSelector(state => state.movies.genres)


    const renderGenres = props.genres &&
        props.genres.map(g => <span key={g.id} className={classes.genres}>{AllGenres[g.id]}</span>)
    const renderStats = props &&
        Array.from({ length: Math.round(props.vote_average) }).map((s, i) => <StarBorderIcon className={classes.star} fontSize="small" key={i} />)

    const companies = props.production_companies &&
        props.production_companies.map((c, i) => <li key={i}>- {c.name}</li>)

    const countries = props.production_countries &&
        props.production_countries.map((c, i) => <li key={i}>- {c.name}</li>)

    const languages = props.spoken_languages &&
        props.spoken_languages.map((l, i) => <li key = {i}>-{l.name}</li>)  

    return (
        <div className={classes.root} >
            <Grid container >
                <Grid item xs={12} md={4} >
                    <div>
                        <img src={`${baseImageUrl}/w342${props.poster_path}`} alt="details_card_img" />
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className={classes.content}>
                        <Typography     variant="subtitle1" noWrap>
                            {renderGenres}
                        </Typography>
                        <Typography variant="h3" className={classes.title}>
                            {props.title}
                        </Typography>
                        <Typography variant = "subtitle1" className = {classes.tagline}>
                            {props.tagline}
                        </Typography>
                        <Typography className={classes.votes} variant="subtitle1">
                            {renderStats}  <span className={classes.voteCount}>(Vote count {props.vote_count})</span>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="subtitle1" className={classes.overview}>
                            <b>Overview</b> <br />{props.overview}
                            <p className = {classes.release_date}>{props.release_date}</p>
                        </Typography>
                        <Divider className={classes.divider} />
                        <Grid container justify = "space-evenly" >
                            <Grid item xs={12} sm={6} md = {4} >
                                <Typography variant="subtitle1" className={classes.companies} >
                                    <b>Production Companies:</b> <ul style={{ margin: "0px" }}>{companies}</ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md = {4}>
                                <Typography variant="subtitle1" className={classes.contries}>
                                    <b>Contries:</b> <ul>{countries}</ul>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6} md = {4}>
                                <Typography variant="subtitle1" className={classes.contries}>
                                    <b>Languages:</b> <ul>{languages}</ul>
                                </Typography>
                            </Grid>
                            
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Detailscard

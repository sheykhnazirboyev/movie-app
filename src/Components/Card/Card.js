import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { AppConfig } from '../../constants/appconfig';
export default function RecipeReviewCard(props) {

  const onError = (e) => {
    e.target.src = AppConfig.img404;
  }

  const classes = useStyles();
  const baseImageUrl = useSelector(state => state.movies.baseImageUrl)
  const AllGenres = useSelector(state => state.movies.genres)

  const renderGenres = props.genre_ids && 
          props.genre_ids.map(g => <span key = {g} className = {classes.genres}>{AllGenres[g]}</span>)

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image= {`${baseImageUrl}/w500${props.poster_path}`}
        
        title="Paella dish"
      />
      <CardContent>
      <Typography variant = "subtitle1" className = {classes.title } noWrap>
        <Link to = {`/movie/${props.id}`}>
          {props.title}
        </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" >
          {props.overview && props.overview.substring(0, 80) + '...'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant = "subtitle1" noWrap>
        {renderGenres}
        </Typography>
        
      </CardActions>
    </Card>
  );
}

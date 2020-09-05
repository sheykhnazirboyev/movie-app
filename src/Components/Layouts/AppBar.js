import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import {searchMovie} from '../../_actions/movieActions';
import { Link } from 'react-router-dom';



export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const page = useSelector(state => state.movies.page);
  const [keyword, setkeyword] = React.useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    setkeyword(e.target.value);
    dispatch(searchMovie(page, e.target.value));
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to = "/" className = {classes.link}>
              Popular Movies
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value = {keyword}
              onChange = {handleSearch}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

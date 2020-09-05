import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import {useSelector} from 'react-redux';

export default function SimpleBackdrop() {
  const classes = useStyles();
  
  const loading = useSelector(state => state.app.loading)

  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

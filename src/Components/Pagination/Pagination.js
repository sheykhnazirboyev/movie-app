import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx'
import useStyles from './styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { setPagination } from '../../_actions/movieActions';



function Pagination() {

  const classes = useStyles();
  const dispatch = useDispatch();

  const total_pages = useSelector(state => state.movies.total_pages)
  const page = useSelector(state => state.movies.page)

  const handleChangePage = (val) => {
    console.log(val)
    if(val > 0 && val <= total_pages){
       dispatch(setPagination(val))
    } else {
      return;
    }
  }

  return (
    <div className={classes.root}>
      <ul className={classes.pagination}>
        <li className={clsx(classes.item, page === 1 && classes.disabled)} onClick = { () => handleChangePage(page - 1) }>
          <ChevronLeftIcon />
        </li>
        {
          page !== 1 && <>
            <li className={classes.item} onClick = {() => handleChangePage(1)} >1</li>
            <li className={classes.item}>...</li>
          </>
        }
        <li className={clsx(classes.item, classes.active)}>{page}</li>
        {
          page !== total_pages && <>
            <li className={classes.item}>...</li>
            <li className={classes.item} onClick = {() => handleChangePage(total_pages)}>{total_pages}</li>
          </>
        }
        <li className={clsx(classes.item, page === total_pages && classes.disabled)} onClick = {() => handleChangePage(page + 1)}>
          <ChevronRightIcon />
        </li>
      </ul>
    </div >

  );
}

export default Pagination;
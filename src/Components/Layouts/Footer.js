import React from 'react'
import useStyles from './styles';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.footer} >
            <IconButton>
                <FacebookIcon />
            </IconButton>
            <IconButton>
                <TwitterIcon />
            </IconButton>
            <IconButton>
                <InstagramIcon />
            </IconButton>
            <IconButton>
                <TelegramIcon />
            </IconButton>
        </div>
    )
}

export default Footer

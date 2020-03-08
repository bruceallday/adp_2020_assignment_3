import React from 'react'
import { useStyles } from './header.styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar' 
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom'

const Header = () => {
    const classes = useStyles()

    return(
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>

                    <Typography>
                        <Link className={classes.link} to="/login">Login</Link>
                    </Typography>

                    <Typography>
                        <Link className={classes.link} to="/signup">Create Account</Link>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
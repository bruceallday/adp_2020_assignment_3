import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/header/header.component'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from './home.styles'

const Home = () => {
    const classes = useStyles()
    const history = useHistory()
    const csrfToken = localStorage.getItem('csrfToken')
    const isLoggedIn = csrfToken !== null

    return(
        <div>
            <Header />
            <Paper className={classes.root} >
                <Typography variant="h1" gutterBottom >
                    Welcome!
                </Typography>
            </Paper>
                           
        </div>
    )
}

export default Home
import React from 'react'
import Header from '../../components/header/header.component'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from './home.styles'

const Home = () => {

    const classes = useStyles()

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
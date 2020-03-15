import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useGraphQL } from 'graphql-react'

import Header from '../../components/header/header.component'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from './home.styles'

const Home = () => {
    const classes = useStyles()
    // const token = localStorage.getItem('jwt')
    // console.log('TOKEN', token)

    return(
        <div>
            <Header />
            <Paper className={classes.root} >
            <Typography variant="h4" gutterBottom >
                    Welcome! Log in or sign up to share a thought.
                </Typography>
            </Paper>
        </div>
    )
}

export default Home
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useGraphQL } from 'graphql-react'

import Header from '../../components/header/header.component'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from './feed.styles'

const Feed = () => {
    const classes = useStyles()
    const history = useHistory()
    const token = localStorage.getItem('jwt')
    console.log('TOKEN', token)

    const test = "userName"

    return (
        <div>
            <Header />
            <Paper className={classes.root} >
                <Typography variant="h4" gutterBottom >
                    {token ? `Welcome @${test} share a thought..` : history.push(`/home`)}
                </Typography>
            </Paper>
        </div>
    )
}

export default Feed
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useGraphQL } from 'graphql-react'

import Header from '../../components/header/header.component'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import useStyles from './home.styles'

const Home = () => {

    const classes = useStyles()
    const token = localStorage.getItem('jwt')
    const { id } = useParams()

    // const { loading, cacheValue } = useGraphQL({
    //     fetchOptionsOverride: (options) => {
    //         options.url = "http://localhost:4000/graphql"
    //     },
    //     operation: {
    //         query: `
    //         {
    //             user(id: ${id}){
    //                 id
    //             }
    //         }
    //         `
    //     },
    //     loadOnMount: true,
    // })

    // if (loading || cacheValue == null) {
    //     return <div>Loading...</div>
    // }

    // const { data } = cacheValue.data

    const test = "placeholder"

    return(
        <div>
            <Header />

            <Paper className={classes.root} >
            <Typography variant="h1" gutterBottom >
                    {token ? `Welcome @${test}` : 'Welcome' }
                </Typography>
            </Paper>
                           
        </div>
    )
}

export default Home
import React from 'react'
import { GraphQL, GraphQLProvider } from 'graphql-react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom"

import Home from './components/home/home.component'

const graphql = new GraphQL()

const App = () => {
    return(
        <GraphQLProvider graphql={graphql} >
            <Router>
                <Switch>

                 <Route path="/" exact>
                    <Home />
                 </Route>

                </Switch>
            </Router>
        
        </GraphQLProvider>
    )
}

export default App
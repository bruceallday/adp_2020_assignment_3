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
import LogIn from './components/log-in/log-in.component'
import SignUp from './components/sign-up/sign-up.component'

const graphql = new GraphQL()

const App = () => {
    return(
        <GraphQLProvider graphql={graphql} >
            <Router>
                <Switch>

                 <Route path="/" exact>
                    <Home />
                 </Route>

                 <Route path="/login" exact>
                    <LogIn />
                 </Route>

                 <Route path="/signup" exact>
                    <SignUp />
                 </Route>

                </Switch>
            </Router>
        
        </GraphQLProvider>
    )
}

export default App
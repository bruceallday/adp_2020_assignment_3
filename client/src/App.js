import React from 'react'
import { GraphQL, GraphQLProvider } from 'graphql-react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom"

import Home from './pages/home/home.component'
import LogIn from './pages/log-in/log-in.component'
import SignUp from './pages/sign-up/sign-up.component'
import Header from './components/header/header.component'

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

                 <Route path="/home" >
                    <Redirect to="/" />
                 </Route>

                 <Route path="/" >
                    404 PAGE
                 </Route>

                </Switch>
            </Router>
        
        </GraphQLProvider>
    )
}

export default App
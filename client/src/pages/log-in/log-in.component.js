import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import { GraphQLContext } from 'graphql-react'
import Paper from '@material-ui/core/Paper'

import Header from '../../components/header/header.component'

import useStyles from './log-in.styles'
import { useHistory } from 'react-router-dom'

const LogIn = () => {
    const classes = useStyles()
    const graphql = React.useContext(GraphQLContext)
    const { handleSubmit, register, errors } = useForm()
    const [ serverError, setServerError ] = useState()
    const history = useHistory()

    const onSubmit = async values => {
        console.log("FRONT END VALUES", values)

        const userData = {
            userName: values.userName,
            userPassword: values.userPassword
        }

        const mutation = `
            mutation($input: CreateLogInInput!) {
                logIn(
                    input: $input
                ){
                    id
                }
            }
        `
        const { cacheValuePromise } = await graphql.operate({
            fetchOptionsOverride: (options) => {
                options.url = "http://localhost:4000/graphql"
                // options.credentials = 'include'
                options.mode = 'cors'
                // options.method = 'POST'
                console.log("OPTIONS", options)
            },
            operation: {
                variables: { input: userData },
                query: mutation,
            },
        })

        const data = cacheValuePromise

        console.log("DATA", data)
        console.log

        history.push('/home')

        // if (data.error != null) {
        //     setServerError(data.error.message)
        // } else {
        //     localStorage.setItem('csrfToken', data.csrfToken)
        //     history.push('/home')
        // }
    }

    return (
        <div >
            <Header />
            <div className={classes.formContainer} >
                <Paper elevation={3} className={classes.paper} >
                    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>

                        <Typography variant="h3" gutterBottom>
                           Log in
                        </Typography>

                        <TextField
                            className={classes.formField}
                            type="text"
                            name="userName"
                            label="User name"
                            error={errors.userName != null}
                            fullWidth
                            inputRef={register({
                                required: 'Required'
                            })}
                        />
                        <Typography color="error">
                            {errors.userName && errors.userName.message}
                        </Typography>

                        <TextField
                            className={classes.formField}
                            name="userPassword"
                            label="Password"
                            type="password"
                            error={errors.userPassword != null}
                            fullWidth
                            inputRef={register({
                                required: 'Required'
                            })}
                        />
                        <Typography color="error">
                            {errors.userPassword && errors.userPassword.message}
                        </Typography>

                        <Typography color="error">
                            {serverError}
                        </Typography>

                        <Button
                            className={classes.formField}
                            variant="contained"
                            type="submit"
                            color="primary"
                        >Log in 
                        </Button>
                    </form>
                </Paper>
            </div>
        </div>
    )
}

export default LogIn
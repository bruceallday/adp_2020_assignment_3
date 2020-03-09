import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GraphQLContext } from 'graphql-react'


import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'

import Header from '../../components/header/header.component'

import Paper from '@material-ui/core/Paper'
import useStyles from './sign-up.styles'

const SignUp = () => {
    const classes = useStyles()
    const { handleSubmit, register, errors, getValues } = useForm()
    const history = useHistory()
    const graphql = React.useContext(GraphQLContext)
    const [serverError, setServerError] = useState()

    const onSubmit = async values => {
        console.log(values)

        if (values.userPassword !== values.confirmPassword) {
            setServerError('Passwords do not match')
            return
        }

        const mutation = `
            mutation:($input: CreateUserInput!){
                createUser(
                    input: $input
                ){
                    id
                }
            }
        `

        const { cacheValuePromise } = graphql.operate({
            fetchOptionsOverride: (options) => {
                options.url = "http://localhost:4000/graphql"
            },
            operation: {
                variables: { input: getValues() },
                query: mutation,
            },
        })
        const { data } = await cacheValuePromise

        history.push(`/login`)
    }

    return (
        <div>
            <Header />
            <div className={ classes.formContainer } >
                <Paper elevation={ 3 } className={ classes.paper } >
                    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>

                        <Typography variant="h3" gutterBottom>
                            Create account
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
                            name="userEmail"
                            label="Your email"
                            type="email"
                            error={errors.userEmail != null}
                            fullWidth
                            inputRef={register({
                                required: 'Required'
                            })}
                        />
                        <Typography color="error">
                            {errors.userEmail && errors.userEmail.message}
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


                        <TextField
                            className={classes.formField}
                            name="confirmPassword"
                            label="Confirm password"
                            type="password"
                            error={errors.confirmPassword != null}
                            fullWidth
                            inputRef={register({
                                required: 'Required'
                            })}
                        />
                        <Typography color="error">
                            {errors.confirmPassword && errors.confirmPassword.message}
                        </Typography>

                        <Typography color="error">
                            {serverError}
                        </Typography>

                        <Button
                            className={classes.formField}
                            variant="contained"
                            type="submit"
                            color="primary"
                            >Create
                        </Button>
                    </form>
                </Paper>
            </div>
        </div>
    )
}


export default SignUp
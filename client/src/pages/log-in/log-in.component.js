import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'

import Header from '../../components/header/header.component'

import Paper from '@material-ui/core/Paper'

import useStyles from './log-in.styles'

const LogIn = () => {
    const classes = useStyles()

    const { handleSubmit, register, errors } = useForm()
    const [ serverError, setServerError ] = useState()

    const onSubmit = async values => {
        console.log(values)
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
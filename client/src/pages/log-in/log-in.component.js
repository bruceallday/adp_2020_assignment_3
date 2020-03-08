import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'

import Header from '../../components/header/header.component'

const LogIn = () => {
    const { handleSubmit, register, errors } = useForm()
    const [ serverError, setServerError ] = useState()

    const onSubmit = async values => {
        console.log(values)
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography>
                    LOG IN
                </Typography>
            
            </form>
        </div>
    )
}

export default LogIn
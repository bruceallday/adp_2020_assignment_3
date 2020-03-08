import React from 'react'
import Header from '../../components/header/header.component'

const SignUp = () => {
    const { handleSubmit, register, errors } = useForm()
    const [serverError, setServerError] = useState()

    const onSubmit = async values => {
        console.log(values)
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography>
                    SIGN UP
                </Typography>

                <TextField
                    type="text"
                    name="name"
                    label="User Name"
                    error={errors.name != null}
                    fullWidth
                    inputRef={register({
                        required: 'Required'
                    })}
                />
                <Typography color="error">
                    {errors.name && errors.name.message}
                </Typography>

                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    error={errors.password != null}
                    fullWidth
                    inputRef={register({
                        required: 'Required'
                    })}
                />
                <Typography color="error">
                    {errors.password && errors.password.message}
                </Typography>


                <TextField
                    name="confirmpassword"
                    label="Confirm Password"
                    type="password"
                    error={errors.password != null}
                    fullWidth
                    inputRef={register({
                        required: 'Required'
                    })}
                />
                <Typography color="error">
                    {errors.password && errors.password.message}
                </Typography>

                <Typography color="error">
                    {serverError}
                </Typography>

                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth>SIGN UP
                </Button>
            </form>
        </div>
    )
}


export default SignUp
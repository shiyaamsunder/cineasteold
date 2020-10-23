import Button from '../../../components/UI/Button/Button'
import React, { useState } from 'react'
import classes from './SignIn.module.css'
import { Link, useHistory } from 'react-router-dom'
import AlertMessage from '../../../components/UI/AlertMessage/AlertMessage'
import { useAuth } from '../../../context/AuthContext'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, googleSignUp, emailError, passwordError } = useAuth()
    const history = useHistory()

    const redirect = () => {
        return history.push("/")
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            if (email || password === '') {
                setError("Enter email and password")
            }
            setLoading(true)
            await login(email, password, redirect)
            setLoading(false)
        } catch {
            console.log(error)
        }

        console.log(`Loading: ${loading}`)
    }

    async function handleGoogleSignIn(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await googleSignUp()
            history.push("/")
        } catch {
            setError("Trouble logging in")
        }
        setLoading(false)
    }


    return (
        <div className={classes.SignIn}>
            <Link to="/"><h1>MovList</h1></Link>

            <div className={classes.SignInContainer}>
                <h2>Sign In</h2>
                {error && <AlertMessage errorMessage={error} />}
                {passwordError && <AlertMessage errorMessage={passwordError} />}
                {emailError && <AlertMessage errorMessage={emailError} />}

                <form onSubmit={handleSubmit}>
                    <h4>Email</h4>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />


                    <div className={classes.SignInButton}>
                        <Button disabled={loading} buttonSize="Btn--medium">Sign In</Button>
                    </div>
                </form>

                <div className={classes.OtherSignIn}>
                    <h4>Or, Sign in using</h4>

                    <button className={classes.Google} onClick={handleGoogleSignIn} ><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />Google</button>

                </div>
            </div>

            <div className={classes.SignUp}>
                <p>Don't have an account yet?</p>

                <Link to='/register'>

                    <Button buttonStyle="Btn--warning--outline">Click here to Register</Button>
                </Link>

            </div>

        </div>

    )
}

export default SignIn;

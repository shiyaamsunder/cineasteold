import Button from '../../../components/UI/Button/Button'
import React, { useState } from 'react'
import classes from './Register.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import AlertMessage from '../../../components/UI/AlertMessage/AlertMessage'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signUp, name, setName, googleSignUp, setUserName, passwordError, emailError } = useAuth()
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
        if (password !== confirmPassword) {
            return setError("Passwords don't match!!")
        }

        setError('')
        setLoading(true)
        await signUp(email, password)
        history.push("/")
        await setUserName(name)
        setLoading(false)
    }

    async function handleGoogleSignUp() {
        try {
            setError('')
            setLoading(true)
            await googleSignUp()
            history.push("/")

        } catch {
            setError('Failed to register')

        }
        setLoading(false)
    }
    return (

        <div className={classes.Register}>
            <Link to="/">
                <h1>MovList</h1>
            </Link>

            <div className={classes.RegisterContainer}>
                <h2>Register</h2>

                {error && <AlertMessage errorMessage={error} />}
                {emailError && <AlertMessage errorMessage={emailError} />}
                {passwordError && <AlertMessage errorMessage={passwordError} />}

                <form onSubmit={handleSubmit}>

                    <h4>Name</h4>
                    <input
                        type="text"
                        value={name}
                        onChange={e => { setName(e.target.value) }} />

                    <h4>Email</h4>
                    <input
                        type="email"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value)
                        }} />

                    <h4>Password</h4>
                    <input
                        type="password"
                        value={password}
                        onChange={e => { setPassword(e.target.value) }} />

                    <h4>Confirm Password</h4>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={e => { setConfirmPassword(e.target.value) }} />

                    <div className={classes.RegisterButton}>
                        <Button
                            disabled={loading}
                            buttonStyle="Btn--primary--solid" buttonSize="Btn--medium">Create a new Account</Button>
                    </div>

                </form>

                <div className={classes.OtherSignIn}>
                    <h4>Or, Register using</h4>

                    <button
                        className={classes.Google}
                        onClick={handleGoogleSignUp} >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                        Google
                        </button>
                </div>
            </div>

            <div className={classes.SignUp}>
                <p>Already have an account?</p>
                <Link to="/signin"> <Button buttonStyle="Btn--warning--outline">Go Back to Login</Button></Link>

            </div>

        </div>

    )
}

export default Register;

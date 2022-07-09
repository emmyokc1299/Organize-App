import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn, signUp } from '../../store/actions/authActions';
import './signup.css'
import Form from './Form.js'
import FormButton from './FormButton'


class SignUp extends Component {
    state = {
        displayName: 'chinedu',
        email: 'chinedu@gmail.com',
        password: '12345678',
        confirmPassword: '12345678'
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props
        if (auth.uid)  return <Redirect to = '/' />

        const {displayName, email, password, confirmPassword} = this.state

        console.log(authError)
        return (
            <div className = 'sign-up'>
                <p>Sign Up</p>

                <form onSubmit = {this.handleSubmit} className = 'sign-up-form'>
                    <Form
                    type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange = {this.handleChange}
                    label = 'Display Name'
                    required
                    />

                    <Form 
                    type = 'email'
                    name = 'email'
                    value = {email}
                    onChange = {this.handleChange}
                    label = 'Email'
                    required
                    />

                    <Form 
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange = {this.handleChange}
                    label = 'Password'
                    required
                    />

                    <Form 
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange = {this.handleChange}
                    label = ' Confirm Password'
                    required
                    />

                    <div className  = 'button-single'>
                        <FormButton type = 'submit'>
                            Sign Up
                        </FormButton>

                    </div>

                </form>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)



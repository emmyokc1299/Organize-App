import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn, signUp } from '../../store/actions/authActions';
import './signin.css'
import Form from './Form.js'
import FormButton from './FormButton'
import { FaArrowRight } from 'react-icons/fa';



class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.props.signIn(this.state)
    };


    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className = 'sign-in'>
                <span> Sign In</span>

                <form onSubmit = {this.handleSubmit}>
                    <Form 
                        name = 'email'
                        type = 'email'
                        value = {this.state.email}
                        handleChange = {this.handleChange}
                        label = 'email'
                        required
                    />

                    <Form
                        name = 'password'
                        type = 'password'
                        value = {this.state.password}
                        handleChange = {this.handleChange}
                        label = 'password'
                        required
                    />

                    <div className = 'button-pair'>
                        <FormButton type = 'submit'>
                            Sign In 
                        </FormButton>
                    </div>

                    <div className = 'redirect'>
                        <p>Don't have an account?</p>
                        <span><FaArrowRight/></span>
                    </div>
                </form>
            </div>
        )
    }
};


const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)







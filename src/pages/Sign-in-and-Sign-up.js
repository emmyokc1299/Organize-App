import React from 'react';
import SignUp from '../components/auth/SignUp'
import SignIn from '../components/auth/SignIn'

import './sign-in-and-sign-up.css';

const SignInAndSignUpPage = () => {
    return(
        <div className = 'sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
};

export default SignInAndSignUpPage;

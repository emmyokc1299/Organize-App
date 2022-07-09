import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.css';
import { FaBuffer } from "react-icons/fa";
import {signOut} from '../../store/actions/authActions'


const Header = ({ auth, signOut }) => {

    return(
        <div className = 'main-header'>
            <Link className = 'logo-container' to = '/'>
                <div className = 'logo'> <FaBuffer/> </div> rganize
            </Link>
            <div className = 'not-logo'>
                {
                    auth.uid ? 
                    <div className = 'signin link' 
                    onClick = {() => {
                        console.log('this works')
                        signOut()
                        }}> SIGN OUT </div>
                    :
                    <Link className = 'signin link' to = '/signin'>
                    SIGN IN
                    </Link>
                }    
                <Link className = 'contact link' to = '/contact'>
                    CONTACT
                </Link>
                <Link className = 'about link' to = '/about'>
                    ABOUT US
                </Link>            
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)













import React from 'react';
import './formbutton.css';

const FormButton = ({children, disabled, ...otherProps}) => {
    return (
        <button className = 'form-button' disabled = {disabled} {...otherProps}>
            {children}
        </button>
    )
};

export default FormButton;




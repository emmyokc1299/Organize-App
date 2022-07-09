import React from 'react';
import './form.css';

const Form = ({handleChange, label, ...otherProps}) => {
    return (
        <div className = 'form'>
            <input className = 'form-input' onChange = {handleChange} 
            {...otherProps}/>
            {
                label ? 
                (<label className = {`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
            
        </div>
    )
};

export default Form;

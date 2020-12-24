import React from 'react';
import './button.scss';

const CustomButtom = ({children, inverted=false, ...otherProps}) => {
    return (
        <button className={`${inverted ? "inverted":""} heading custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButtom;
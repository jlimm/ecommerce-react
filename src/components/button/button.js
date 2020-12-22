import React from 'react';
import './button.scss';

const CustomButtom = ({children, ...otherProps}) => {
    return (
        <button className="heading custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButtom;
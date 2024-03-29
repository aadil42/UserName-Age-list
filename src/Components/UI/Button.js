import React from 'react';

// get the css
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button onClick={props.onConfirm} className={`${classes.button}`} type={props.type || 'button'}>
            {props.children}
        </button>
    );
}

export default Button;
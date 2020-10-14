import React from 'react';
import './Button.css'


const STYLES = [
    'Btn--primary--solid',
    'Btn--warning--solid',
    'Btn--danger--solid',
    'Btn--success--solid',
    'Btn--primary--outline',
    'Btn--warning--outline',
    'Btn--danger--outline',
    'Btn--success--outline',
]

const SIZES = ['Btn--medium', 'Btn--large']

function Button({
    children,
    type,
    onClick,
    disabled,
    buttonStyle,
    buttonSize
}) {
    const checkBtnStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`Button ${checkBtnStyle} ${checkBtnSize}`}>
            {children}
        </button>
    )
}

export default Button

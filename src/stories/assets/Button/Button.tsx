import React from 'react'
import './Button.css'

interface ButtonProps {
    variant?: string;
    children?: React.ReactNode;
  }

function Button(props: ButtonProps) {
    const { variant = 'primary', children, ...rest } = props;
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button
import React from 'react';
import { Content } from './styles';

function Button({ children, ...props }) {
    return (
        <Content {...props} className="button">{children}</Content>
    )
}

export default Button
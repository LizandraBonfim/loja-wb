import React from 'react';

import { CampoInput } from './styles';

function Input({ label, id, type, onBlur, onChange, name, error }) {
    return (
        <CampoInput>
            <label htmlFor={id}>
                {label}
            </label>

            <input
                type={type}
                name={name}
                id={id}
                onBlur={onBlur}
                onChange={onChange}
            />
        </CampoInput>
    )
}

export default Input;
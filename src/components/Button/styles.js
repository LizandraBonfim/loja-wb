import styled from 'styled-components';
import { darken } from 'polished';


export const Content = styled.button`

    margin-top: 2rem;
    padding: .5rem;
    color: #fff;
    background: #007bff;
    border-color: #007bff;
    border-radius: .4rem;
    cursor: pointer;
    font-size: 1rem;
    outline: none;

    &:hover, &:focus{
        background: ${darken(0.06, '#007bff')};
        outline: none;
    }
    
`;

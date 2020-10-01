import styled, { keyframes } from 'styled-components';
import { LoginContainer } from '../../global';


const animeTop = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`


export const Preco = styled(LoginContainer)`
   box-shadow: 0px 1px 2px 0px #b9afaf;
`;


export const ProdutoItem = styled.div`
    border: 1px solid #eee;
    transition: .2s;

    button{
        display: none;
        margin-top: 0;
        padding: 1rem;
    }

    &:hover  {
       
            button{
                
            transform: translateY(-20px);
            animation: ${animeTop} .7s forwards;
            display: block;
        }
    }

    &:hover{
        box-shadow: 0px 0px 11px #e2dbdb;

        ${Preco} {
            display: none;
        }
    }
    
`;


export const DescricaoProduto = styled.div`
    padding: .6rem;

    p{
        color: #4c4c4c;
    }
`;


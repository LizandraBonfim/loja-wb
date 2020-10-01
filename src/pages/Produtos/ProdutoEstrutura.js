import styled from 'styled-components';
import { LoginContainer } from '../../global';

export const ProdutoItem = styled.div`
    border: 1px solid #eee;
    transition: .2s;

    &:hover{
        box-shadow: 0px 0px 11px #e2dbdb;
    }
    
`;

export const DescricaoProduto = styled.div`
    padding: .6rem;

    p{
        color: #4c4c4c;
    }
`;

export const Preco = styled(LoginContainer)`
   box-shadow: 0px 1px 2px 0px #b9afaf;

 

`;

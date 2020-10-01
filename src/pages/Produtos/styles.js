import styled from 'styled-components';
import banner from '../../assets/banners/nerdstore.png';
import { LoginContainer } from '../../global';

export const Banner = styled.div`
position: relative;
z-index: 1;
background-attachment: fixed;


&::after{
    content: '';
    position: absolute;

    background: url(${banner}) no-repeat center;
    bottom: 0;
    
    width: 100%;
    height: 100%;
}
  
`;


export const ProdutosCard = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`;

export const ProdutoItem = styled.div`
    border: 1px solid #eee;
    
`;

export const Preco = styled(LoginContainer)`
   box-shadow: 0px 1px 2px 0px #b9afaf;

`;

export const DescricaoProduto = styled.div`
    padding: .6rem;

    p{
        color: #4c4c4c;
    }
`;
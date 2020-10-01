import styled, { keyframes } from 'styled-components';
import banner from '../../assets/banners/nerdstore.png';
import banner1 from '../../assets/banners/Template.jpg';

import { LoginContainer } from '../../global';

export const Banner = styled.div`
position: relative;
background-attachment: fixed;
height: 50vh;
background: url(${banner1}) no-repeat;
background-size: cover;


&::after{
    content: '';
    position: absolute;

    background: url(${banner}) no-repeat center;
    bottom: 0;
    
    width: 100%;
    height: 100%;
}
  
`;

export const Preco = styled(LoginContainer)`
   box-shadow: 0px 1px 2px 0px #b9afaf;

 

`;

const animeTop = keyframes`
  to{
    opacity: 1;
    transform: initial;
  }
`


export const ProdutosCard = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    button{
        display: none;
        margin-top: 0;
        padding: 1rem;
    }

    &:hover  {

        ${Preco} {
            display: none;
        }
            button{
                
                transform: translateY(-20px);
                animation: ${animeTop} .7s forwards;
                display: block;
        }
    }
`;

export const ProdutoItem = styled.div`
    border: 1px solid #eee;
    
`;


export const DescricaoProduto = styled.div`
    padding: .6rem;

  

    p{
        color: #4c4c4c;
    }
`;
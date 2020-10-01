import styled, { keyframes } from 'styled-components';

import banner from '../../assets/banners/nerdstore.png';
import banner1 from '../../assets/banners/Template.jpg';
import { LoginContainer } from '../../global';

export const Banner = styled.div`
position: relative;
background-attachment: fixed;
 
background-size: cover;


&::after{
    content: '';
    position: absolute;
    background-size: cover;
    background: url(${banner}) no-repeat center;
    bottom: 0;
    
    width: 100%;
    height: 100%;

    
}

@media(max-width: 60rem){
        height: 20vh;
        
        &::after{
            font-family: serif;
            content: 'NerdStore Enterprise';
            position: absolute;
            background: none;
            bottom: 0;
            color: #fff;
            width: 100%;
            height: 100%;
            text-align: center;
            justify-content: center;
            margin: auto;
            align-items: center;
            top: 50%;
            font-size: 2rem;
            }

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

    @media(max-width: 60rem){
        grid-template-columns: 1fr 1fr;
    }
`;

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
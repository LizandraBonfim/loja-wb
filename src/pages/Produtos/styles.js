import styled from 'styled-components';

import banner from '../../assets/banners/nerdstore.png';

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



export const ProdutosCard = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

   

    @media(max-width: 60rem){
        grid-template-columns: 1fr 1fr;
    }
`;
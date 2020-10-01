import styled from 'styled-components';

export const HeaderContainer = styled.header`
    box-shadow: 0px 1px 0 0 #b9afaf;
    padding: .2rem 0;
`;



export const DisplayFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

   

    span{
        background: red;
        border-radius: 50%;
        padding: 0 0.2rem;
        top: 0px;
        right: -3px;
        color: #fff;
        position: absolute;
        font-size: 13px;
        align-items: center;
    }

    p{
        color: #b9afaf;
        font-size: .9rem;
    }

    div{

        a{
           



        }
    }
                

    
`;


export const Content = styled(DisplayFlex)`
   

    img{
        width: 4rem;
        display: block;
    }
`;

export const CarrinhoIcon = styled.a`

        transition: .3s;
        position: relative;
        margin-right: 1rem;
 
        border-radius: 50%;
        border:1px solid #e6d9d9;
        padding: .5rem;
        /* display: flex; */
        background: none;


        &:hover{
            text-decoration: underline;
        }

        + span{
            position: absolute;

        }

        @media(max-width: 60rem){
            position: fixed;
            background: #fbfbfb;
            bottom: 1rem;
            z-index: 1000;
            right: 1rem;
            box-shadow: 0px 0px 5px 1px #403b3b;
        }

`

export const Carrinho = styled(DisplayFlex)`


`;

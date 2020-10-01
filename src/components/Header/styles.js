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
        margin-left: 1rem;

        a{
            transition: .3s;
            position: relative;


            &:hover{
                text-decoration: underline;
            }

            + span{
                position: absolute;

            }
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
 
        border-radius: 50%;
        border:1px solid #e6d9d9;
        padding: .5rem;
        /* display: flex; */
        background: none;

`

export const Carrinho = styled(DisplayFlex)`

`;

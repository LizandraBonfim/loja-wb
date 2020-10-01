import styled from 'styled-components';
import { DisplayFlex } from '../../components/Header/styles';

export const Container = styled.div`
    border: 1px solid #eee;
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1{
        font-size: 2rem;
        padding: .5rem 0;
    }

    h3{
        font-size: 1.2rem;
        padding: .8rem 0;
    }

    h5{
        padding: .8rem 0;
        
        border-bottom: 1px solid #eee;
    }
`;

export const DetalhesCompra = styled.section`
    border-left: 1px solid #eee;
    padding: 1rem;
`;

export const QtdEstoque = styled.div`
    display: flex;
    p{
        color: green;

    }
`;

export const Avaliacao = styled(DisplayFlex)`
    display: flex;
   align-items: center;
   padding: 0 1rem 0 0;

    div{

        margin-left: 0;

        &:first-child{
            color: #a2a2a2;
        }
    }


`;

export const Quantidade = styled.div`

input{

    width: 20%;
}
`;

export const BotaoComprar = styled.div`
    display: flex;

    button:first-child{
        margin-top: 2rem;
        padding: .5rem;
        color: green;
        background: #fff;
        border-color: green;
        border-radius: .4rem;
        cursor: pointer;
        font-size: 1rem;
        margin-right: .5rem;
    }

    button:nth-child(2){
        width: 80%;
    }
`;
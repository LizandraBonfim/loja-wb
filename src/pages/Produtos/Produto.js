import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';
import camisa1 from '../../assets/produtos/camiseta1.jpg';
import Button from '../../components/Button';
import { ProdutoItem, DescricaoProduto, Preco } from './ProdutoEstrutura'

function Produto() {
    return (
        <Link to="/produto/camisa1">

            <ProdutoItem>
                <div>
                    <Image src={camisa1} alt="Camisa 1" />
                </div>

                <DescricaoProduto>
                    <h4>Camisa Cinza</h4>

                    <p>Camisa 100% algodão</p>
                </DescricaoProduto>
                <Preco>
                    <h3>R$ 80,00</h3>

                </Preco>

                <Button> Comprar </Button>
            </ProdutoItem>

        </Link>


    )
}

export default Produto

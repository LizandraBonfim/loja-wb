import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { FcChargeBattery } from 'react-icons/fc';
import produto from '../../assets/produtos/caneca3.jpg';

import { MainContainer, AnimeLeft } from '../../global';
import {
    Container,
    Avaliacao,
    QtdEstoque,
    Quantidade,
    DetalhesCompra,
    BotaoComprar
} from './produtoDetalheEstrutura';
import Input from '../../components/Input';
import Button from '../../components/Button';

function ProdutoDetalhe() {
    return (
        <MainContainer>
            <AnimeLeft>
                <Container>
                    <section>
                        <img src={produto} alt="Produto" />
                    </section>

                    <DetalhesCompra>
                        <h1>Caneca</h1>

                        <Avaliacao>

                            <div>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />

                            </div>

                            <p>123 Avaliações</p>

                            <QtdEstoque>
                                <FcChargeBattery />

                                <p> 152 Vendidos</p>

                            </QtdEstoque>

                        </Avaliacao>

                        <h3>R$ 50,00</h3>

                        <h3>Caneca porcelana com impressão térmica de alta resistência.</h3>

                        <h5>100</h5>

                        <Quantidade>
                            Quantidade:
                                <Input type="number" name="" id="" />
                        </Quantidade>

                        <BotaoComprar>
                            <button>
                                Adicionar ao Carrinho
                                <FaShoppingCart />
                            </button>

                            <Button>
                                Voltar
                            </Button>
                        </BotaoComprar>
                    </DetalhesCompra>
                </Container>
            </AnimeLeft>
        </MainContainer>
    );
}

export default ProdutoDetalhe;
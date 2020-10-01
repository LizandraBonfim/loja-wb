import React from 'react';
import banner from '../../assets/banners/Template.jpg';

import camisa1 from '../../assets/produtos/camiseta1.jpg';
import camisa2 from '../../assets/produtos/camiseta2.jpg';
import caneca1 from '../../assets/produtos/caneca1.jpg';
import caneca2 from '../../assets/produtos/caneca2.jpg';
import { MainContainer, AnimeLeft } from '../../global';
import { Banner, ProdutosCard, ProdutoItem, Preco, DescricaoProduto } from './styles';
import Button from '../../components/Button';

function Produtos() {
    return (

        <section>
            <Banner>

                <img src={banner} alt="Banner" />
            </Banner>

            <MainContainer>
                <AnimeLeft>

                    <ProdutosCard>

                        <a href="/">

                            <ProdutoItem>
                                <div>
                                    <img src={camisa1} alt="Camisa 1" />
                                </div>

                                <DescricaoProduto>
                                    <h4>Camisa Cinza</h4>

                                    <p>Camisa 100% algodão</p>
                                </DescricaoProduto>
                                <Preco>
                                    <h3>R$ 80,00</h3>

                                </Preco>

                            </ProdutoItem>

                            <Button>
                                Comprar
                            </Button>
                        </a>


                        <ProdutoItem>
                            <div>
                                <img src={camisa2} alt="Camisa 2" />
                            </div>

                            <DescricaoProduto>
                                <h4>Camisa Cinza</h4>

                                <p>Camisa 100% algodão</p>
                            </DescricaoProduto>
                            <Preco>
                                <h3>R$ 80,00</h3>

                            </Preco>

                        </ProdutoItem>

                        <ProdutoItem>
                            <div>
                                <img src={caneca2} alt="caneca 1" />
                            </div>

                            <DescricaoProduto>
                                <h4>Camisa Cinza</h4>

                                <p>Camisa 100% algodão</p>
                            </DescricaoProduto>
                            <Preco>
                                <h3>R$ 20,00</h3>

                            </Preco>

                        </ProdutoItem>
                        <ProdutoItem>
                            <div>
                                <img src={caneca1} alt="caneca 1" />
                            </div>

                            <DescricaoProduto>
                                <h4>Camisa Cinza</h4>

                                <p>Camisa 100% algodão</p>
                            </DescricaoProduto>
                            <Preco>
                                <h3>R$ 20,00</h3>
                            </Preco>

                        </ProdutoItem>

                    </ProdutosCard>
                </AnimeLeft>

            </MainContainer>
        </section>
    )
}

export default Produtos;
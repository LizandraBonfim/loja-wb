import React from 'react';
import banner from '../../assets/banners/Template.jpg';

import Produto from './Produto';

import { MainContainer, AnimeLeft } from '../../global';
import { Banner, ProdutosCard } from './styles';

function Produtos() {


    return (

        <section>
            <Banner>

                <img src={banner} alt="Banner" />
            </Banner>

            <MainContainer>
                <AnimeLeft>

                    <ProdutosCard>
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                        <Produto />
                    </ProdutosCard>
                </AnimeLeft>

            </MainContainer>
        </section>
    )
}

export default Produtos;
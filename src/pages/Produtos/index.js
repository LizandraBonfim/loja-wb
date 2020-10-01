import React from 'react';
import banner from '../../assets/banners/Template.jpg';

import { Banner } from './styles';
import { MainContainer } from '../../global';

function Produtos() {
    return (

        <section>
            <Banner>

                <img src={banner} alt="Banner" />
            </Banner>

            <MainContainer>
            </MainContainer>
        </section>
    )
}

export default Produtos;
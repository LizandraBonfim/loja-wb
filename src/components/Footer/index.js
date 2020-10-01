import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import googleStore from '../../assets/playmarket.png';
import appstore from '../../assets/appstore.png';

import { Container } from '../../global';

import { FooterContainer, Content, Institucional, Section } from './styles';

function Footer() {
    return (
        <FooterContainer>

            <Container>
                <Content>
                    <Institucional>
                        <img src={logo} alt="Logo" />
                        <p>Ecommerce institucional</p>

                        <ul>
                            <li><FaInstagram /></li>
                            <li><FaFacebook /></li>
                            <li><FaYoutube /></li>
                            <li><FaTwitter /></li>
                        </ul>
                    </Institucional>

                    <Section>
                        <h3>Sobre</h3>

                        <ul>
                            <li><a href="/">Sobre</a></li>
                            <li> <a href="/">Serviços</a> </li>
                            <li><a href="/">Termo de uso</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </Section>

                    <Section>
                        <h3>Serviços</h3>

                        <ul>
                            <li><a href="/">Meus pedidos</a></li>
                            <li> <a href="/">Meu Perfil</a> </li>
                            <li><a href="/">Cancelamento</a></li>
                            <li><a href="/">Reembolsos</a></li>
                        </ul>
                    </Section>

                    <Section>
                        <h3>Mobile</h3>

                        <ul>
                            <li><img src={appstore} alt="App Store" /></li>
                            <li><img src={googleStore} alt="Google Store" /></li>


                        </ul>
                    </Section>

                </Content>
            </Container>;
        </FooterContainer>
    )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Container } from '../../global';

import { HeaderContainer, Content, Carrinho, CarrinhoIcon } from './styles';

function Header() {
    return (

        <HeaderContainer>

            <Container>
                <Content>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>

                    <Carrinho>

                        <CarrinhoIcon href="">

                            <FaShoppingCart size={20} color={'#b9afaf'} />

                            <span>0</span>
                        </CarrinhoIcon>

                        <nav>
                            <p>Bem vindo!</p>
                            <Link to="/criar-conta">Criar conta</Link> | <Link to="/login">Login</Link>
                        </nav>
                    </Carrinho>
                </Content>
            </Container>

        </HeaderContainer>

    );
}

export default Header;
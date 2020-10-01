import React from 'react';
import { Link } from 'react-router-dom';
import { AnimeLeft, MainContainer } from '../../global';

import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import { Content, LoginContainer } from '../../global';

function Login() {

    const email = useForm("email");
    const password = useForm("password");

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (

        <MainContainer>

            <AnimeLeft>
                <Content>

                    <form onSubmit={handleSubmit}>

                        <h3>Seja bem vindo!</h3>
                        <Input label="Email" type="email" name="email" {...email} />
                        <Input label="Senha" type="password" name="password" {...password} />

                        <Button >
                            Entrar
                    </Button>

                    </form>



                    <LoginContainer>
                        <p>Não possui cadastro?
                    <Link to="/login" >Criar uma conta </Link>
                        </p>

                    </LoginContainer>
                </Content>
            </AnimeLeft>
        </MainContainer>

    )
}

export default Login;
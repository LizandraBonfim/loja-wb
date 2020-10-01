import React from 'react';
import { Link } from 'react-router-dom';


import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import { AnimeLeft, MainContainer } from '../../global';
import { Content, LoginContainer } from '../../global';

function Cadastro() {

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
                        <Input label="Confirmar senha" type="password" name="password" {...password} />


                        <Button >
                            Registrar
                    </Button>

                    </form>



                    <LoginContainer>
                        <p>Já possui cadastro ?
                    <Link to="/login" >Entrar </Link>
                        </p>

                    </LoginContainer>
                </Content>
            </AnimeLeft>
        </MainContainer>

    )
}

export default Cadastro;
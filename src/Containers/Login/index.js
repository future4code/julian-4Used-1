import React from 'react';
import {
    LoginContainer,
    HeaderContainer,
    FormContainer
} from './style';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
    render(){
        return(
            <LoginContainer>
                <HeaderContainer />
                <FormContainer>
                    <TextField label='Nome do usuário' />
                    <TextField label='Password' type='password' />
                    <Button>Entrar</Button>
                </FormContainer>
                <Footer />
            </LoginContainer>
        )
    }
}

export default Login
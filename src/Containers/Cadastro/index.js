import React from 'react';
import {
    CadastroContainer,
    HeaderContainer,
    FormContainer
} from './style';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Cadastro extends React.Component{
    render(){
        return(
            <CadastroContainer>
                <HeaderContainer />
                <FormContainer>
                    <TextField label='Nome' />
                    <TextField label='Descrição' />
                    <TextField label='Preço' />
                    <TextField label='Método de Pagamento' />
                    <TextField label='Categoria' />
                    <TextField label='Fotos' />
                    <TextField label='Número de parcelas' />
                    <Button>Cadastrar</Button>
                </FormContainer>
                <Footer />
            </CadastroContainer>
        )
    }
}

export default Cadastro
import React from "react";
import { LoginContainer, FormContainer, FormBox, BotaoEntrar } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextField from "@material-ui/core/TextField";

class Login extends React.Component {
  render() {
    return (
      <LoginContainer>
        <Header
          abreHome={this.props.abreHome}
          abreAnunciar={this.props.abreAnunciar}
        />
        <FormContainer>
          <FormBox elevation={20}>
            <TextField label="Nome do usuário" />
            <TextField label="Password" type="password" />
            <BotaoEntrar>Entrar</BotaoEntrar>
          </FormBox>
        </FormContainer>
        <Footer />
      </LoginContainer>
    );
  }
}

export default Login;

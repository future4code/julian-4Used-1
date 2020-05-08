import React from "react";
import {
  CadastroContainer,
  FormContainer,
  CadastroBodyContainer,
  ImagemContainer,
  CadastroProdutoFoto,
  BotaoCadastrar,
  BotaoUpload,
  BoxFoto,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class Cadastro extends React.Component {
  state = {
    urlDaFoto: "",
    inputNome: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: "",
    inputCategoria: "",
    inputFoto: "",
    inputParcelas: "",
  };

  funcaoExibeFoto = (event) => {
    this.setState({ urlDaFoto: event.target.value });
  };

  onChangeInputName = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeInputCatego = (event) => {
    this.setState({ inputCategoria: event.target.value });
  };

  onChangeInputDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };

  onChangeInputPreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };

  onChangeInputPagamento = (event) => {
    this.setState({ inputPagamento: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ inputFoto: event.target.value });
  };

  onChangeInputParcelas = (event) => {
    this.setState({ inputParcelas: event.target.value });
  };

  funcaoCadastraProduto = () => {
    const body = {
      name: this.state.inputNome,
      description: this.state.inputDescricao,
      price: this.state.inputPreco,
      paymentMethod: this.state.inputPagamento,
      category: this.state.inputCategoria,
      photos: [this.state.inputFoto],
      installments: this.state.inputParcelas,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products",
        body
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      })
      .then(
        this.setState({
          urlDaFoto: "",
          inputPreco: "",
          inputParcelas: "",
          inputPagamento: "",
          inputCategoria: "",
          inputDescricao: "",
          inputFoto: "",
          inputNome: "",
        })
      );
  };
  render() {
    console.log(this.state.inputFoto);
    return (
      <CadastroContainer>
        <Header
          abreCarrinho={this.props.abreCarrinho}
          abreHome={this.props.abreHome}
          abreLogin={this.props.abreLogin}
        />
        <CadastroBodyContainer>
          <FormContainer>
            <TextField
              label="Nome"
              onChange={this.onChangeInputName}
              value={this.state.inputNome}
            />
            <TextField
              label="Descrição"
              onChange={this.onChangeInputDescricao}
              value={this.state.inputDescricao}
            />
            <TextField
              label="Preço"
              onChange={this.onChangeInputPreco}
              value={this.state.inputPreco}
            />
            <TextField
              label="Método de Pagamento"
              onChange={this.onChangeInputPagamento}
              value={this.state.inputPagamento}
            />
            <TextField
              label="Categoria"
              onChange={this.onChangeInputCatego}
              value={this.state.inputCategoria}
            />
            <TextField
              label="Fotos"
              onChange={this.onChangeInputFoto}
              value={this.state.inputFoto}
            />
            <TextField
              label="Número de parcelas"
              onChange={this.onChangeInputParcelas}
              value={this.state.inputParcelas}
            />
            <BotaoCadastrar
              variant="contained"
              color="secondary"
              value={this.state.urlDaFoto}
              onClick={this.funcaoCadastraProduto}
            >
              Cadastrar
            </BotaoCadastrar>
          </FormContainer>
          <ImagemContainer>
            <CadastroProdutoFoto src={this.state.urlDaFoto} />
          </ImagemContainer>
        </CadastroBodyContainer>
        <Footer />
      </CadastroContainer>
    );
  }
}

export default Cadastro;

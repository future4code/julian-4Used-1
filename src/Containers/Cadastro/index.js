import React from "react";
import {
  CadastroContainer,
  FormContainer,
  CadastroBodyContainer,
  ImagemContainer,
  CadastroProdutoFoto,
  BotaoCadastrar,
  InputContainer,
  SelectContainer,
  FormControle,
  SelectLabel,
  Option,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

class Cadastro extends React.Component {
  state = {
    urlDaFoto:
      "https://enquadrarte.com.br/wp-content/uploads/2019/03/quadro-personalizado-vertical.jpg",
    inputNome: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: "",
    inputCategoria: "",
    inputFoto: "",
    inputParcelas: "",
  };

  // funcaoExibeFoto = (event) => {
  //   this.setState({ urlDaFoto: event.target.value });
  // };

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
    this.setState({ urlDaFoto: event.target.value });
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
          urlDaFoto:
            "https://enquadrarte.com.br/wp-content/uploads/2019/03/quadro-personalizado-vertical.jpg",
          inputPreco: "",
          inputParcelas: "",
          inputPagamento: "",
          inputCategoria: "",
          inputDescricao: "",
          inputFoto: "",
          inputNome: "",
        })
      )
      .then(window.alert("Produto cadastrado!"));
  };
  render() {
    return (
      <CadastroContainer>
        <Header
          abreCarrinho={this.props.abreCarrinho}
          abreHome={this.props.abreHome}
          abreLogin={this.props.abreLogin}
          abreAnunciar={this.props.abreAnunciar}
        />
        <CadastroBodyContainer>
          <FormContainer>
            <InputContainer
              label="Nome"
              onChange={this.onChangeInputName}
              value={this.state.inputNome}
            />
            <InputContainer
              label="Descrição"
              onChange={this.onChangeInputDescricao}
              value={this.state.inputDescricao}
            />
            <InputContainer
              label="Preço"
              onChange={this.onChangeInputPreco}
              value={this.state.inputPreco}
            />
            <FormControle>
              <SelectLabel>Método de Pagamento</SelectLabel>
              <SelectContainer
                onChange={this.onChangeInputPagamento}
                value={this.state.inputPagamento}
              >
                <Option value={'Cartão'}>Cartão</Option>
                <Option value={'Boleto'}>Boleto</Option>
                <Option value={'Dinheiro'}>Dinheiro</Option>
                <Option value={'PayPal'}>PayPal</Option>
              </SelectContainer>
            </FormControle>
            <FormControle>
              <SelectLabel>Categoria</SelectLabel>
              <SelectContainer
                onChange={this.onChangeInputCatego}
                value={this.state.inputCategoria}
              >
                {this.props.categorias.map(categoria => {
                  return <Option value={categoria}>{categoria}</Option>
                })}
              </SelectContainer>
            </FormControle>
            <InputContainer
              label="Fotos"
              onChange={this.onChangeInputFoto}
              value={this.state.inputFoto}
            />
            <FormControle>
              <SelectLabel>Número de parcelas</SelectLabel>
              <SelectContainer
                onChange={this.onChangeInputParcelas}
                value={this.state.inputParcelas}
              >
                <Option value={1}>1</Option>
                <Option value={2}>2</Option>
                <Option value={3}>3</Option>
                <Option value={4}>4</Option>
                <Option value={5}>5</Option>
                <Option value={6}>6</Option>
                <Option value={7}>7</Option>
                <Option value={8}>8</Option>
                <Option value={9}>9</Option>
                <Option value={10}>10</Option>
                <Option value={11}>11</Option>
                <Option value={12}>12</Option>
              </SelectContainer>
            </FormControle>
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

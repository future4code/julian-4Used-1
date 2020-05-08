import React from "react";
import {
  ListaProdutosContainer,
  HeaderContainer,
  BarraFiltroContainer,
  ProdutosContainer,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardListaProdutos from "../../components/CardListaProdutos";
import Filtro from "../../components/Filtro";
import Axios from "axios";

class ListaDeProdutos extends React.Component {
  state = {
    listaProdutos: [],
    inputValorMaximo: "",
    inputValorMinimo: "",
    inputCategoria: "",
    inputNome: "",
  };

  componentDidMount = () => {
    this.pegaProdutos();
  };

  pegaProdutos = () => {
    Axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products"
    )
      .then((response) => {
        this.setState({
          listaProdutos: response.data.products,
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  limpaFiltros = () => {
    this.setState({
      inputValorMaximo: "",
      inputValorMinimo: "",
      inputNome: "",
      inputCategoria: "",
    });
  };

  ordenaLista = (event) => {
    let novaLista = this.state.listaProdutos;
    if (event.target.value === "Nome") {
      novaLista = [].concat(this.state.listaProdutos).sort((a, b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
    } else if (event.target.value === "Categoria") {
      novaLista = [].concat(this.state.listaProdutos).sort((a, b) => {
        return a.category < b.category ? -1 : a.category > b.category ? 1 : 0;
      });
    } else if (event.target.value === "Menor Preço") {
      novaLista = [].concat(this.state.listaProdutos).sort((a, b) => {
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
      });
    } else if (event.target.value === "Maior Preço") {
      novaLista = [].concat(this.state.listaProdutos).sort((a, b) => {
        return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
      });
    }
    this.setState({ listaProdutos: novaLista });
  };

  render() {
    let listaFiltrada = this.state.listaProdutos;
    if (this.state.inputValorMinimo !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.price >= this.state.inputValorMinimo;
      });
    }
    if (this.state.inputValorMaximo !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.price <= this.state.inputValorMaximo;
      });
    }
    if (this.state.inputCategoria !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return produto.category === this.state.inputCategoria;
      });
    }
    if (this.state.inputNome !== "") {
      listaFiltrada = listaFiltrada.filter((produto) => {
        return (
          produto.name
            .toLowerCase()
            .includes(this.state.inputNome.toLowerCase()) ||
          produto.description
            .toLowerCase()
            .includes(this.state.inputNome.toLowerCase())
        );
      });
    }

    return (
      <ListaProdutosContainer>
        <HeaderContainer>
          <Header
            abreHome={this.props.abreHome}
            abreCarrinho={this.props.abreCarrinho}
            abreLogin={this.props.abreLogin}
          />
        </HeaderContainer>
        <BarraFiltroContainer>
          <Filtro
            inputMaximo={this.state.inputValorMaximo}
            inputMinimo={this.state.inputValorMinimo}
            inputCategoria={this.state.inputCategoria}
            inputNome={this.state.inputNome}
            onChangeFiltro={this.handleChange}
            onChangeOrdem={this.ordenaLista}
            onClickLimpa={this.limpaFiltros}
          />
        </BarraFiltroContainer>
        <ProdutosContainer>
          {listaFiltrada.map((produto) => {
            return (
              <CardListaProdutos
                key={produto.id}
                produto={produto}
                abreProduto={this.props.abreProduto}
              />
            );
          })}
        </ProdutosContainer>
        <Footer />
      </ListaProdutosContainer>
    );
  }
}

export default ListaDeProdutos;

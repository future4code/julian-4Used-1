import React, { Component } from "react";
import Cadastro from "./Cadastro";
import Carrinho from "./Carrinho";
import HomePage from "./HomePage";
import ListaDeProdutos from "./ListaDeProdutos";
import Login from "./Login";
import PageProduto from "./PageProduto";

export class AppContainer extends Component {
  state = {
    paginaExibida: "homepage",
    produto: "",
    carrinho: []

  };

  abreCarrinho = () => {
    this.setState({ paginaExibida: "carrinho" });
  };

  funcaoRetornar = () => {
    this.setState({ paginaExibida: "homepage" });
  };

  abreLogin = () => {
    this.setState({ paginaExibida: "login" });
  };

  abreLista = () => {
    this.setState({ paginaExibida: "lista" });
  };

  abreProduto = (produto) => {
    this.setState({ paginaExibida: "produto", produto: produto });
  };

  abreAnunciar = () => {
    this.setState({ paginaExibida: "cadastro" });
  };

  adicionarProduto = (produto) => {

    const novaListaCarrinho = [...this.state.carrinho, produto]

    this.setState({
      carrinho: novaListaCarrinho
    })
  }

  render() {
    switch (this.state.paginaExibida) {
      case "homepage":
        return (
          <HomePage
            abreCarrinho={this.abreCarrinho}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreLista={this.abreLista}
            abreProduto={this.abreProduto}
            abreAnunciar={this.abreAnunciar}
            adicionarProduto={this.adicionarProduto}

          />
        );

      case "cadastro":
        return (
          <Cadastro
            abreCarrinho={this.abreCarrinho}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreProduto={this.abreProduto}
            abreAnunciar={this.abreAnunciar}
          />
        );

      case "carrinho":
        return (
          <Carrinho 
            produtoCarrinho={this.state.carrinho}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreAnunciar={this.abreAnunciar}
          />
        );

      case "lista":
        return (
          <ListaDeProdutos
            abreCarrinho={this.abreCarrinho}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreProduto={this.abreProduto}
            abreAnunciar={this.abreAnunciar}
          />
        );

      case "login":
        return (
          <Login
            abreHome={this.funcaoRetornar}
            abreAnunciar={this.abreAnunciar}
            abreLogin={this.abreLogin}
            abreCarrinho={this.abreCarrinho}
          />
        );

      case "produto":
        return (
          <PageProduto
            produto={this.state.produto}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreCarrinho={this.abreCarrinho}
            abreAnunciar={this.abreAnunciar}
          />
        );

      default:
        return <HomePage />;
    }

    // return (
    //   <div>
    //     <HomePage></HomePage>
    //     <Cadastro></Cadastro>
    //     <Carrinho></Carrinho>
    //     <ListaDeProdutos></ListaDeProdutos>
    //     <Login></Login>
    //     <PageProduto></PageProduto>
    //   </div>
    // )
  }
}

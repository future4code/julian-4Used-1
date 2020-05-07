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

  abreProduto = () => {
    this.setState({ paginaExibida: "produto" });
  };
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
          />
        );

      case "cadastro":
        return <Cadastro />;

      case "carrinho":
        return <Carrinho abreHome={this.funcaoRetornar} />;

      case "lista":
        return <ListaDeProdutos abreHome={this.funcaoRetornar} />;

      case "login":
        return <Login abreHome={this.funcaoRetornar} />;

      case "produto":
        return <PageProduto abreHome={this.funcaoRetornar} />;

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

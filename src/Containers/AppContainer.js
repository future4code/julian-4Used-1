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

    produto.qtd = 1;

    const novaListaCarrinho = [...this.state.carrinho, produto]

    this.setState({
      carrinho: novaListaCarrinho
    })
  }

  adicionarQtd = (id) => {
    const novaListaDeProdutos = this.state.carrinho.map((produto) => {
      if (id === produto.id && produto.qtd >= 1){
        const alteracao = {
          ...produto,
          qtd: produto.qtd + 1
        }
        return alteracao
      }else{
        return produto;
      }
    })

    this.setState({
      carrinho: novaListaDeProdutos
    })
  }

  diminuirQtd = (id) => {
    const novaListaDeProdutos = this.state.carrinho.map((produto) => {
      if (id === produto.id && produto.qtd > 1){
        const alteracao = {
          ...produto,
          qtd: produto.qtd - 1
        }
        return alteracao
      }else{
        return produto;
      }
    })

    this.setState({
      carrinho: novaListaDeProdutos
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
          />
        );

      case "carrinho":
        return (
          <Carrinho
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreAnunciar={this.abreAnunciar}
            produtoCarrinho={this.state.carrinho}
            adicionarQtd={this.adicionarQtd}
            diminuirQtd={this.diminuirQtd}
          />
        );

      case "lista":
        return (
          <ListaDeProdutos
            abreCarrinho={this.abreCarrinho}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreProduto={this.abreProduto}
          />
        );

      case "login":
        return (
          <Login
            abreHome={this.funcaoRetornar}
            abreAnunciar={this.abreAnunciar}
          />
        );

      case "produto":
        return (
          <PageProduto
            abreHome={this.funcaoRetornar}
            produto={this.state.produto}
            abreLogin={this.abreLogin}
            abreCarrinho={this.abreCarrinho}
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

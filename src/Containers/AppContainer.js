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
    carrinho: [],
    categorias: [
      "Decoração",
      "Vestuário",
      "Eletrônicos",
      "Mobília",
      "Utilitários",
      "Cozinha",
      "Instrumentos Musicais",
      "Outros",
    ],
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

    const novaListaCarrinho = [...this.state.carrinho, produto];

    this.setState({
      carrinho: novaListaCarrinho,
    });
  };

  removerProduto = (id) => {
    if (window.confirm("Tem certeza que deseja remover?")) {
      const novaListaCarrinho = this.state.carrinho.filter((produto) => {
        return id !== produto.id;
      });
      this.setState({
        carrinho: novaListaCarrinho,
      });
    }
  };

  adicionarQtd = (id) => {
    const novaListaDeProdutos = this.state.carrinho.map((produto) => {
      if (id === produto.id && produto.qtd >= 1) {
        const alteracao = {
          ...produto,
          qtd: produto.qtd + 1,
        };
        return alteracao;
      } else {
        return produto;
      }
    });

    this.setState({
      carrinho: novaListaDeProdutos,
    });
  };

  diminuirQtd = (id) => {
    const novaListaDeProdutos = this.state.carrinho.map((produto) => {
      if (id === produto.id && produto.qtd > 1) {
        const alteracao = {
          ...produto,
          qtd: produto.qtd - 1,
        };
        return alteracao;
      } else {
        return produto;
      }
    });

    this.setState({
      carrinho: novaListaDeProdutos,
    });
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
            abreAnunciar={this.abreAnunciar}
            adicionarProduto={this.adicionarProduto}
          />
        );

      case "cadastro":
        return (
          <Cadastro
            categorias={this.state.categorias}
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
            adicionarQtd={this.adicionarQtd}
            diminuirQtd={this.diminuirQtd}
            removerProduto={this.removerProduto}
          />
        );

      case "lista":
        return (
          <ListaDeProdutos
            categorias={this.state.categorias}
            abreCarrinho={this.abreCarrinho}
            abreHome={this.funcaoRetornar}
            abreLogin={this.abreLogin}
            abreProduto={this.abreProduto}
            abreAnunciar={this.abreAnunciar}
            abreLista={this.abreLista}
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
            adicionarProduto={this.adicionarProduto}
          />
        );

      default:
        return <HomePage />;
    }
  }
}

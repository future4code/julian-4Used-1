import React from "react";
import {
  HomeContainer,
  HeaderContainer,
  BannerContainer,
  ProdutosContainer,
  FooterContainer,
  ContainerVejaMais,
  BotaoVejaMais,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardProduto from "../../components/CardProduto";
import Axios from "axios";

class HomePage extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount = () => {
    this.mostrarProdutos();
  };

  mostrarProdutos = () => {
    Axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products"
    )
      .then((response) => {
        this.setState({
          produtos: response.data.products,
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  render() {
    const todosOsProdutos = this.state.produtos.map((produto) => {
      return (
        <CardProduto
          key={produto.id}
          produto={produto}
          abreProduto={this.props.abreProduto}
        />
      );
    });

    let primeiros6 = [];

    for (let i = 0; i < 6; i++) {
      primeiros6.push(todosOsProdutos[i]);
    }

    return (
      <HomeContainer>
        <HeaderContainer>
          <Header
            abreCarrinho={this.props.abreCarrinho}
            funcaoRetornar={this.props.abreHome}
            abreLogin={this.props.abreLogin}
            abreAnunciar={this.props.abreAnunciar}
          ></Header>
        </HeaderContainer>
        <ContainerVejaMais>
          <BotaoVejaMais color="primary" onClick={this.props.abreLista}>
            Veja mais
          </BotaoVejaMais>
        </ContainerVejaMais>
        <ProdutosContainer>{primeiros6}</ProdutosContainer>
        <Footer />
      </HomeContainer>
    );
  }
}

export default HomePage;

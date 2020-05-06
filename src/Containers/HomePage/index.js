import React from "react";
import {
  HomeContainer,
  HeaderContainer,
  BannerContainer,
  ProdutosContainer,
  FooterContainer,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardProduto from "../../components/CardProduto";

class HomePage extends React.Component {
  render() {
    return (
      <HomeContainer>
        <HeaderContainer>
          <Header tituloTeste="Funcionou"></Header>
        </HeaderContainer>

        <BannerContainer></BannerContainer>

        <ProdutosContainer>
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </ProdutosContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </HomeContainer>
    );
  }
}

export default HomePage;

import React from "react";
import {
  HomeContainer,
  HeaderContainer,
  BannerContainer,
  ProdutosContainer,
  ProdutoItem,
  FooterContainer
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class HomePage extends React.Component {
  render() {
    return (
      <HomeContainer>
        <HeaderContainer>
          <Header tituloTeste="Funcionou"></Header>
        </HeaderContainer>

        <BannerContainer></BannerContainer>

        <ProdutosContainer>
          <ProdutoItem></ProdutoItem>
          <ProdutoItem></ProdutoItem>
          <ProdutoItem></ProdutoItem>
        </ProdutosContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </HomeContainer>
    );
  }
}

export default HomePage;

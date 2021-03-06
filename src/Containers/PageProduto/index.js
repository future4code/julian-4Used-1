import React from "react";
import { PageProdutoContainer, ProdutoContainer } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Produto from "../../components/Produto";

class PageProduto extends React.Component {
  render() {
    return (
      <PageProdutoContainer>
        <Header
          abreHome={this.props.abreHome}
          abreCarrinho={this.props.abreCarrinho}
        />

        <ProdutoContainer>
          <Produto
            produto={this.props.produto}
            adicionarProduto={this.props.adicionarProduto}
          />
        </ProdutoContainer>

        <Footer />
      </PageProdutoContainer>
    );
  }
}

export default PageProduto;

import React from "react";
import {
  PageProdutoContainer,
  ProdutoContainer,
  FooterContainer,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Produto from "../../components/Produto";

class PageProduto extends React.Component {
  render() {
    return (
      <PageProdutoContainer>
        <Header abreHome={this.props.abreHome} />

        <ProdutoContainer>
          <Produto 
            produto={this.props.produto}
          />
        </ProdutoContainer>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </PageProdutoContainer>
    );
  }
}

export default PageProduto;

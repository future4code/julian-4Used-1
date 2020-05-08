import React from "react";
import {
  CorpoCarrinho,
  ContainerCarrinho,
  BotaoFinalizar,
  ContainerBottom,
} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardCarrinho from "../../components/CardCarrinho";

class Carrinho extends React.Component {
  render() {
    return (
      <CorpoCarrinho>
        <Header
          abreHome={this.props.abreHome}
          abreLogin={this.props.abreLogin}
          abreCarrinho={this.abreCarrinho}
          abreAnunciar={this.props.abreAnunciar}
        />
        <ContainerCarrinho>
          {this.props.produtoCarrinho.map((produto) => {
            return <CardCarrinho produtoCarrinho={produto}/>
          })}
          
          <ContainerBottom>
            <BotaoFinalizar color="secondary">Finalizar Compra</BotaoFinalizar>
          </ContainerBottom>
        </ContainerCarrinho>

        <Footer />
      </CorpoCarrinho>
    );
  }
}

export default Carrinho;

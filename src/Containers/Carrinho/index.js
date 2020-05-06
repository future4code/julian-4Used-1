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
        <Header />
        <ContainerCarrinho>
          <CardCarrinho />
          <CardCarrinho />
          <ContainerBottom>
            <BotaoFinalizar>Finalizar Compra</BotaoFinalizar>
          </ContainerBottom>
        </ContainerCarrinho>

        <Footer />
      </CorpoCarrinho>
    );
  }
}

export default Carrinho;

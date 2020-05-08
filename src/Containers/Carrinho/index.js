import React from "react";
import {
  CorpoCarrinho,
  ContainerCarrinho,
  BotaoFinalizar,
  ContainerBottom,
  CarrinhoWrapper
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
            return <CarrinhoWrapper>
                    <CardCarrinho produtoCarrinho={produto} 
                    adicionarQtd={() => this.props.adicionarQtd(produto.id, produto.qtd)}
                    diminuirQtd = {() => this.props.diminuirQtd(produto.id, produto.qtd)}/>
                  </CarrinhoWrapper>
          })}
          
          <ContainerBottom>
            <BotaoFinalizar color="secondary" variant="contained">Finalizar Compra</BotaoFinalizar>
          </ContainerBottom>
        </ContainerCarrinho>

        <Footer />
      </CorpoCarrinho>
    );
  }
}

export default Carrinho;

import React from "react";
import { CardContainer } from "./style";
// import { FotoProduto } from "./style";
import {
  ContainerDetalhes,
  BotaoExcluir,
  DetalhesDireita,
  DetalhesEsquerda,
} from "./style";
import {} from "./style";

class CardCarrinho extends React.Component {
  render() {
    return (
      <CardContainer elevation={20}>
        <img src={this.props.produtoCarrinho.photos} alt="foto" />
        <ContainerDetalhes>
          <DetalhesEsquerda>
            <p>{this.props.produtoCarrinho.name}</p>
            <p>{this.props.produtoCarrinho.description}</p>
            <p>Valor: R$ {this.props.produtoCarrinho.price}</p>
            <p>Forma de pagamento: {this.props.produtoCarrinho.paymentMethod}</p>
          </DetalhesEsquerda>
          <DetalhesDireita>
            <p>Quantidade: 15</p>
            <BotaoExcluir></BotaoExcluir>
          </DetalhesDireita>
        </ContainerDetalhes>
      </CardContainer>
    );
  }
}

export default CardCarrinho;

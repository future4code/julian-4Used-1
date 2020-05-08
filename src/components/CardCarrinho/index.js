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
        <img src="https://picsum.photos/200/200" alt="foto" />
        <ContainerDetalhes>
          <DetalhesEsquerda>
            <p>Nome do produto</p>
            <p>Descrição da compra</p>
            <p>Valor: R$ 100,00</p>
            <p>Forma de pagamento: Transferência</p>
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

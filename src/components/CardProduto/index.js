import React from "react";
import {
  ProdutoItem,
  NomeProduto,
  ImagemCard,
  InsigniaPreco,
  BotaoComprar,
} from "./style";

class CardProduto extends React.Component {
  render() {
    return (
      <ProdutoItem elevation={20}>
        <InsigniaPreco badgeContent={this.props.valorProduto} color="secondary">
          <NomeProduto>{this.props.nomeProduto}</NomeProduto>
          <ImagemCard src={this.props.imagemProduto} alt="foto" />
        </InsigniaPreco>
        <BotaoComprar color="secondary" variant="contained">
          Comprar
        </BotaoComprar>
      </ProdutoItem>
    );
  }
}

export default CardProduto;

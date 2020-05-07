import React from "react";
import {
  ProdutoItem,
  TextoCardProduto,
  NomeProduto,
  ImagemCard,
} from "./style";

class CardListaProdutos extends React.Component {
  render() {
    return (
      <ProdutoItem onClick={() => this.props.abreProduto(this.props.produto)}>
        <ImagemCard src={this.props.produto.photos} alt="foto" />
        <NomeProduto>{this.props.produto.name}</NomeProduto>
        <TextoCardProduto>
          R$ {this.props.produto.price}
        </TextoCardProduto>
      </ProdutoItem>
    );
  }
}

export default CardListaProdutos;
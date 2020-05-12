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
        <InsigniaPreco
          badgeContent={this.props.produto.price}
          color="secondary"
          max={999}
        >
          <NomeProduto
            onClick={() => this.props.abreProduto(this.props.produto)}
          >
            {this.props.produto.name}
          </NomeProduto>
          <ImagemCard src={this.props.produto.photos} alt="foto" />
        </InsigniaPreco>
        <BotaoComprar color="secondary" variant="contained" onClick={() => this.props.adicionarProduto(this.props.produto)}>
          Comprar
        </BotaoComprar>
      </ProdutoItem>
    );
  }
}

export default CardProduto;

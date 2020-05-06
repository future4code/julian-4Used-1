import React from "react";
import {
  ProdutoItem,
  ItemDetalhes,
  TextoCardProduto,
  NomeProduto,
  BoxImagemTexto,
  ImagemCard,
} from "./style";

class CardListaProdutos extends React.Component {
  render() {
    return (
      <ProdutoItem>
        <NomeProduto>{this.props.nomeProduto}</NomeProduto>
        <BoxImagemTexto>
          <ImagemCard src={this.props.imagemProduto} alt="foto" />
          <ItemDetalhes>
            <TextoCardProduto>
              {this.props.descricaoProduto}
            </TextoCardProduto>
            <select>
              <option>Cartão</option>
              <option>Boleto</option>
              <option>Depósito</option>
              <option>PayPal</option>
            </select>
            <TextoCardProduto>Categoria: {this.props.categoriaProduto}</TextoCardProduto>
            <TextoCardProduto>Número de Parcelas: {this.props.parcelaProduto}</TextoCardProduto>
          </ItemDetalhes>
        </BoxImagemTexto>
      </ProdutoItem>
    );
  }
}

export default CardListaProdutos;
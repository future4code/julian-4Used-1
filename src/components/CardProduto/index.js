import React from "react";
import {
  ProdutoItem,
  ItemDetalhes,
  TextoCardProduto,
  NomeProduto,
  BoxImagemTexto,
  ImagemCard,
} from "./style";

class CardProduto extends React.Component {
  render() {
    return (
      <ProdutoItem>
        <NomeProduto>Nome do Produto</NomeProduto>
        <BoxImagemTexto>
          <ImagemCard src="https://picsum.photos/150" alt="foto" />
          <ItemDetalhes>
            <TextoCardProduto>
              Descrição do produto etc etc etc etc etc
            </TextoCardProduto>
            <select>
              <option>Cartão</option>
              <option>Boleto</option>
              <option>Depósito</option>
              <option>PayPal</option>
            </select>
            <TextoCardProduto>Categoria: Indumentária</TextoCardProduto>
            <TextoCardProduto>Número de Parcelas:</TextoCardProduto>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </ItemDetalhes>
        </BoxImagemTexto>
      </ProdutoItem>
    );
  }
}

export default CardProduto;

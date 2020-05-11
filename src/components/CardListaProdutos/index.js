import React from "react";
import {
  ProdutoItem,
  TextoCardProduto,
  NomeProduto,
  ImagemCard,
  BotaoExcluirProduto,
  BoxInferior,
} from "./style";
import Axios from "axios";

class CardListaProdutos extends React.Component {
  excluiProduto = () => {
    if (window.confirm("Tem certeza que deseja excluir o produto?")) {
      const id = this.props.produto.id;
      const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products/";
      return Axios.delete(url + id)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
    this.props.abreLista();
  };

  render() {
    return (
      <ProdutoItem onClick={() => this.props.abreProduto(this.props.produto)}>
        <ImagemCard src={this.props.produto.photos} alt="foto" />
        <NomeProduto>{this.props.produto.name}</NomeProduto>
        <BoxInferior>
          <BotaoExcluirProduto onClick={this.excluiProduto} />
          <TextoCardProduto>R$ {this.props.produto.price}</TextoCardProduto>
        </BoxInferior>
      </ProdutoItem>
    );
  }
}

export default CardListaProdutos;

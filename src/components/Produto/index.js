import React from "react";
import {
  ProdutoWrapper,
  TituloProduto,
  ImagemCard,
  DescriçãoProduto,
  Seletor,
  BotaoComprar,
} from "./style";

class Produto extends React.Component {
  render() {
    let numeroParcelas = [];
    for (let i = 1; i <= this.props.produto.installments; i++) {
      numeroParcelas.push(i);
    }
    return (
      <ProdutoWrapper>
        <TituloProduto>
          <h3>{this.props.produto.name}</h3>
          <ImagemCard src={this.props.produto.photos} alt="foto" />
        </TituloProduto>

        <DescriçãoProduto>
          <p>R$ {this.props.produto.price}</p>
          <p>{this.props.produto.description}</p>
          <p>Formas de pagamento:{this.props.produto.paymentMethod}</p>
          <p>{this.props.produto.category}</p>
          <label>Formas de parcelamento no cartão de crédito:</label>
          <Seletor>
            {numeroParcelas.map((numero) => {
              return <option>{numero}</option>;
            })}
          </Seletor>
        </DescriçãoProduto>
        <BotaoComprar
          variant="contained"
          color="secondary"
          onClick={this.props.adicionarProduto}
        >
          Comprar
        </BotaoComprar>
      </ProdutoWrapper>
    );
  }
}

export default Produto;

import React from 'react'
import {ProdutoWrapper,
  TituloProduto,
  ImagemCard,
  DescriçãoProduto} from './style'

class Produto extends React.Component{
  render(){
    let numeroParcelas = [];
      for(let i = 1; i <= this.props.produto.installments; i++) {
        numeroParcelas.push(i);
      }
    return(
      <ProdutoWrapper>
        <TituloProduto>
          <h3>Nome do Produto</h3>
          <ImagemCard src={this.props.produto.photos} alt="foto" />
        </TituloProduto>

        <DescriçãoProduto>
          <p>R$ {this.props.produto.price}</p>
          <p>{this.props.produto.description}</p>
          <p>Formas de pagamento:</p>
          <p>{this.props.produto.paymentMethod}</p>
          <p>{this.props.produto.category}</p>
          <label>Formas de parcelamento no cartão de crédito:</label>
            <select>
              {
                numeroParcelas.map(numero => {
                  return <option>{numero}</option>
                })
              }
            </select>
        </DescriçãoProduto>
      </ProdutoWrapper>
    )
  }
}

export default Produto
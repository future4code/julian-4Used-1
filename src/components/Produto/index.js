import React from 'react'
import {ProdutoWrapper,
    TituloProduto,
    ImagemCard,
    DescriçãoProduto} from './style'

class Produto extends React.Component{
    render(){
        return(
            <ProdutoWrapper>
                <TituloProduto>
                    <h3>Nome do Produto</h3>
                    <ImagemCard src={this.props.imagemProduto} alt="foto" />
                </TituloProduto>

                <DescriçãoProduto>
                    <p>R$</p>
                    <p>Descrição - Um breve texto sobre o produto</p>
                    <label>Formas de pagamento:</label>
                        <select>
                            <option>Boleto</option>
                            <option>Transferência Bancária</option>
                            <option>Débito</option>
                            <option>Cartão de crédito</option>
                        </select>
                    <p>Categoria</p>
                    <label>Formas de parcelamento no cartão de crédito:</label>
                        <select>
                            <option>1x sem juros (10% de desconto)</option>
                            <option>2x sem juros</option>
                            <option>3x sem juros</option>
                        </select>
                </DescriçãoProduto>
            </ProdutoWrapper>
        )
    }
}

export default Produto
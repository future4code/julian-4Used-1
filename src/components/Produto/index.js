import React from 'react'
import {ProdutoWrapper,
    TituloProduto} from './style'

class Produto extends React.Component{
    render(){
        return(
            <ProdutoWrapper>
                <TituloProduto variant="h1">HELLO</TituloProduto>
            </ProdutoWrapper>
        )
    }
}

export default Produto
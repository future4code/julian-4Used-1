import React from 'react';
import {
    ListaProdutosContainer,
    HeaderContainer,
    BarraFiltroContainer,
    ProdutosContainer,
    ProdutoItem
} from './style';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class ListaDeProdutos extends React.Component{
    render(){
        return(
            <ListaProdutosContainer>
                <HeaderContainer />
                <BarraFiltroContainer>
                    Barra com filtros
                </BarraFiltroContainer>
                <ProdutosContainer>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                    <ProdutoItem>Produto</ProdutoItem>
                </ProdutosContainer>
                <Footer />
            </ListaProdutosContainer>
        )
    }
}

export default ListaDeProdutos
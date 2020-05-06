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
import CardListaProdutos from '../../components/CardListaProdutos'
import Axios from 'axios';

class ListaDeProdutos extends React.Component{
    state = {
        produtos: []
      }
    
      componentDidMount = () => {
        this.mostrarProdutos();
      }
    
      mostrarProdutos = () => {
        Axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products')
        .then(response => {
          this.setState({
            produtos: response.data.products
          })
        })
        .catch(error => {
          window.alert(error)
        })
      }

    render(){
        const todosOsProdutos = this.state.produtos.map((produto) => {
            return <CardListaProdutos 
                  nomeProduto={produto.name}
                  imagemProduto={produto.photos}
                  descricaoProduto={produto.description}
                  categoriaProduto={produto.category}
                  parcelaProduto={produto.installments}
                  key={produto.name}/>
          })

        return(
            <ListaProdutosContainer>
                <HeaderContainer />
                <BarraFiltroContainer>
                    Barra com filtros
                </BarraFiltroContainer>
                <ProdutosContainer>
                    {todosOsProdutos}
                </ProdutosContainer>
                <Footer />
            </ListaProdutosContainer>
        )
    }
}

export default ListaDeProdutos
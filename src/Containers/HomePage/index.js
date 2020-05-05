import React from 'react'
import {HomeContainer, HeaderContainer, BannerContainer, ProdutosContainer, ProdutoItem} from './style'
import Header from '../../components/Header'

class HomePage extends React.Component{
    render(){
        return(
            <HomeContainer>

                <HeaderContainer>
                    <Header tituloTeste="Funcionou"></Header>
                </HeaderContainer>

                <BannerContainer></BannerContainer>

                <ProdutosContainer>
                    <ProdutoItem></ProdutoItem>
                    <ProdutoItem></ProdutoItem>
                    <ProdutoItem></ProdutoItem>
                </ProdutosContainer>

            </HomeContainer>
        )
    }

}

export default HomePage
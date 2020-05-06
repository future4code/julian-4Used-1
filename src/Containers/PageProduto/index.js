import React from 'react'
import {PageProdutoContainer,
    HeaderContainer,
    ProdutoContainer,
    FooterContainer} from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Produto from '../../components/Produto'

class PageProduto extends React.Component{
    render(){
        return(
            <PageProdutoContainer>
                <HeaderContainer>
                    <Header/>
                </HeaderContainer>

                <ProdutoContainer>
                    <Produto></Produto>
                </ProdutoContainer>

                <FooterContainer>
                    <Footer/>
                </FooterContainer>
            </PageProdutoContainer>
        )
    }
}

export default PageProduto
import React from 'react'
import {HomeContainer, HeaderContainer, BannerContainer, ProdutosContainer, ProdutoItem} from './style'

class HomePage extends React.Component{
    render(){
        return(
            <HomeContainer>

                <HeaderContainer></HeaderContainer>

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
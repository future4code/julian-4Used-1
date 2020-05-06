import styled from 'styled-components'

export const HomeContainer = styled.div`
    margin: 0 auto;
    padding: 0%;
`

export const HeaderContainer = styled.div`
`

export const BannerContainer = styled.div`
`


export const ProdutosContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const FooterContainer = styled.div`
    
`

export const ProdutoItem = styled.div`
    
    @media screen and (max-width: 500px){
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 500px){
        width: 30%;
    }
`
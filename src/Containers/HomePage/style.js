import styled from 'styled-components'

export const HomeContainer = styled.div`
`

export const HeaderContainer = styled.div`
    background-color: blue;
    height: 100px;
`

export const BannerContainer = styled.div`
    background-color: green;
    height: 300px;
`


export const ProdutosContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 300px;
    margin-top: 10px;
`

export const ProdutoItem = styled.div`
    background-color: purple;
    
    @media screen and (max-width: 500px){
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 500px){
        width: 30%;
    }
`
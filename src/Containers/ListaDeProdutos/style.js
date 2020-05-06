import styled from 'styled-components';

export const ListaProdutosContainer = styled.div``

export const HeaderContainer = styled.div`
    background-color: blue;
    height: 100px;
`
export const BarraFiltroContainer = styled.div`
    height: 50px;
    background-color: red;
`
export const ProdutosContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
`
export const ProdutoItem = styled.div`
    background-color: green;
    margin-bottom: 10px;
    height: 200px;

    @media screen and (max-width: 500px){
        width: 100%;
    }
    @media screen and (min-width: 500px){
        width: 22%;
    }
`
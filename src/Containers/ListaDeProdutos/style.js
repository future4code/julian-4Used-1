import styled from 'styled-components';

export const ListaProdutosContainer = styled.div``

export const HeaderContainer = styled.div`
`
export const BarraFiltroContainer = styled.div`
  height: 50px;
  background-color: red;
`
export const ProdutosContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
  }
`
export const FooterContainer = styled.div``
import styled from "styled-components";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

export const CardContainer = styled.div`
  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 30vh;
    width: 80%;
    background-color: #a5c1ce;
    color: white;
    margin: auto;
    padding: 15px;
  }
  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    height: 60vh;
    width: 100vw;
    background-color: #a5c1ce;
    padding-left: 50px;
  }
`;

// export const FotoCarrinho = styled.img``;

export const ContainerDetalhes = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  @media screen and (max-width: 500px) {
    flex-flow: column wrap;
  }
`;

export const BotaoExcluir = styled(DeleteForeverRoundedIcon)`
  margin-left: 20px;
`;

export const DetalhesEsquerda = styled.div``;

export const DetalhesDireita = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

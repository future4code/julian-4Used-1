import styled from "styled-components";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import Paper from "@material-ui/core/Paper";

export const CardContainer = styled(Paper)`
  &&{
    @media screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: auto;
    width: 80%;
    background-color: #a5c1ce;
    color: white;
    margin: auto;
    padding: 15px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 100%;
    width: 100vw;
    flex-wrap: wrap;
    background-color: #a5c1ce;
    border: #004275 4px solid;
  }
  }
  
`;

// export const FotoCarrinho = styled.img``;

export const ContainerImg = styled.div`
  @media screen and (min-width: 500px){
    height: 100%;
    width: 30%;
  }
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px){
    margin-top: 10px;
  }
  
`

export const Imagem = styled.img`
  @media screen and (min-width: 500px) {
    width: 90%;
    height: 90%;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    height: 90%;
    max-height: 30vh;
  }
`

export const ContainerDetalhes = styled.div`
  width: 60%;
  height: 100%;
`;

export const BotaoExcluir = styled(DeleteForeverRoundedIcon)`
`;

export const DetalhesEsquerda = styled.div``;

export const DetalhesDireita = styled.div`
  
`;
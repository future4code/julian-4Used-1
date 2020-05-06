import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const ProdutoItem = styled(Paper)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 500px) {
    width: 27vw;
    height: 20vw;
  }
`;

export const ItemDetalhes = styled.div`
  margin: auto;
  margin-left: 20px;
`;

export const TextoCardProduto = styled.p`
  font-size: 0.7em;
`;

export const NomeProduto = styled.h2`
  margin: auto;
`;

export const BoxImagemTexto = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
  height: 80%;
  width: 100%;
`;

export const ImagemCard = styled.img`
  margin: auto;
`;

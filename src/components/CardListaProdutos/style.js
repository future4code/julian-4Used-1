import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const ProdutoItem = styled(Paper)`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextoCardProduto = styled.p`
  font-size: 0.7em;
  align-self: flex-end;
`;

export const NomeProduto = styled.h2`
  margin: auto;
`;

export const ImagemCard = styled.img`
  width: 100%;
  margin: auto;
`;

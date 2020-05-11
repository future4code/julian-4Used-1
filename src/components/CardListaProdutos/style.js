import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import IconeLixo from "@material-ui/icons/DeleteRounded";

export const ProdutoItem = styled(Paper)`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const TextoCardProduto = styled.p`
  font-size: 1.5em;
`;

export const NomeProduto = styled.h2`
  margin: auto;
`;

export const ImagemCard = styled.img`
  width: 150px;
  margin: auto;
`;

export const BotaoExcluirProduto = styled(IconeLixo)`
  cursor: pointer;
  margin: auto;
`;

export const BoxInferior = styled.div`
  display: flex;
  flex-flow: row-reverse wrap;
`;

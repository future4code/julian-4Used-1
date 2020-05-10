import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";

export const ProdutoItem = styled(Paper)`
  margin-top: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  padding: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 500px) {
    width: 27vw;
    height: 20vw;
  }
`;

export const NomeProduto = styled(Button)`
  margin: auto;
`;

export const ImagemCard = styled.img`
  margin: auto;
  height: 180px;
  width: 180px;
`;

export const InsigniaPreco = styled(Badge)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BotaoComprar = styled(Button)`
  margin-top: 10px;
  width: 50%;
  align-self: center;
`;

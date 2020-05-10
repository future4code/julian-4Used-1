import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const ProdutoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr 1fr;
  background-color: white;
  height: 100%;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 500px) {
    grid-template-rows: 1.5fr 0.5fr 1fr;
    grid-template-columns: 1fr;
  }
`;

export const TituloProduto = styled(Typography)`
  text-align: center;
`;
export const DescriçãoProduto = styled.div`
  display: grid;
  grid-template-rows: 1fr repeat(6);
  text-align: left;
  align-self: center;
  height: 70%;
`;

export const ImagemCard = styled.img`
  margin: auto;
  height: 420px;
  width: 420px;
  @media screen and (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;

export const DescricaoProduto = styled(Typography)`
  display: grid;
  grid-template-rows: 1fr repeat(6);
  text-align: left;
  align-self: center;
  height: 70%;
`;

export const Seletor = styled.select`
  width: 8vw;
`;

export const BotaoComprar = styled(Button)`
  margin: auto;
  height: 4vw;
  width: 8vw;
  @media screen and (max-width: 500px) {
    height: 12vw;
    width: 16vh;
  }
`;

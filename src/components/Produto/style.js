import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const ProdutoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  height: 100%;
  width: 100%;
  align-items: center;
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

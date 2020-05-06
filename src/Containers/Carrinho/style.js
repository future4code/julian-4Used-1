import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const CorpoCarrinho = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: #787f82;
  align-items: center;
`;

export const ContainerCarrinho = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 70vh;
  background-color: #004275;
  width: 60vw;
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const BotaoFinalizar = styled(Fab)`
  width: 10vw;
  border-radius: 10%;
  background-color: #fcd0a7;
  color: #004275;
  margin-right: 5vw;
`;

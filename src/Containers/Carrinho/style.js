import styled from "styled-components";
import Fab from "@material-ui/core/Fab";

export const CorpoCarrinho = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: #787f82;
  align-items: center;
  @media screen and (max-width: 500px) {
    background-color: #004275;
  }
`;

export const ContainerCarrinho = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
    flex-flow: column wrap;
    height: 80vh;
    background-color: #004275;
    width: 60vw;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const BotaoFinalizar = styled(Fab)`
  width: 10vw;
  border-radius: 20px;
  margin-right: 5vw;
  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`;

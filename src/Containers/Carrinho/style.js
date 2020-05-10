import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

export const CorpoCarrinho = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: #787f82;
  align-items: center;
  @media screen and (max-width: 500px) {
    background-color: #004275;
    width: 100vw;
  }
`;

export const ContainerCarrinho = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    height: auto;
    min-height: 100px;
    background-color: #004275;
    width: 60vw;
  }
  @media screen and (max-width: 500px) {
    width: 70vw;
    margin-right: 30vw;
    min-height: 100px;
  }
`;

export const CarrinhoWrapper = styled.div`
  margin-top: 20px;
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const BotaoFinalizar = styled(Button)`
  width: 12vw;
  border-radius: 20px;
  margin-right: 5vw;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 50vw;
  }
`;

export const BoxValorTotal = styled(Paper)``;

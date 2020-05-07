import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

export const InputBusca = styled(Input)`
  background-color: #a5c1ce;
  border-radius: 10px;
  :hover {
    background-color: #bed2dc;
  }
`;

export const BotaoContainer = styled(IconButton)`
  && {
    color: purple;
  }
`;

export const HeaderFlex = styled.div`
  display: grid;
  background-color: #a5c1ce;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr 1fr;
`;

export const ContainerLogo = styled.img`
  height: 70px;
  width: auto;
`;

export const BuscaInputContainer = styled.div`
  margin: auto;
  width: 40%;
`;

export const IconesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

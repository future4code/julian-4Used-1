import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Fab from "@material-ui/core/Fab";

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
  grid-template-columns: 1fr 1fr 0.5fr;
  width: 100vw;
  margin-left: 0;
  justify-content: space-between;
`;

export const ContainerLogo = styled.img`
  height: 70px;
  width: auto;
  margin-left: 0;
`;

export const BuscaInputContainer = styled.div`
  margin: auto;
  width: 100%;
`;

export const IconesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const BotaoRetornar = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 10%;
`;

export const LoginIcone = styled(PersonOutlineOutlinedIcon)``;

export const ContainerIcones = styled(Fab)`
  margin: auto;
`;

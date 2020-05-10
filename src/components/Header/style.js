import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

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
  background-color: #a5c1ce;
  width: 100vw;
`;

export const HeaderDesktopWrapper = styled.div`
  @media screen and (min-width: 500px){
    display: grid;
    width: 95%;
    margin: 0 auto;
    justify-content: space-between;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
  }
  @media screen and (max-width: 500px){
    display: none;
  }
`

export const HeaderCellWrapper = styled(ExpansionPanel)`
  &&{
    @media screen and (min-width: 500px){
      display: none;
    }
    background-color: #a5c1ce;
    margin: 0;
  }
  
  
`

export const ItensMenu = styled(ExpansionPanelSummary)`
  &&{
    @media screen and (min-width: 500px){
      display: none;
    }
  }
`

export const ItensMenuEscondido = styled(ExpansionPanelDetails)`
  &&{
    @media screen and (min-width: 500px){
      display: none;
    }
  }
`

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

export const BotaoAnunciar = styled(Button)`
  margin: auto;
`;

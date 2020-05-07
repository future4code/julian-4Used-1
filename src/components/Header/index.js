import React from "react";
import {
  HeaderFlex,
  ContainerLogo,
  InputBusca,
  IconeCarrinho,
  BuscaInputContainer,
  IconesContainer,
  BotaoRetornar,
  LoginIcone,
  ContainerIcones,
} from "./style";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Logo from "../../Logo/logo.png";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

class Header extends React.Component {
  render() {
    return (
      <HeaderFlex>
        <BotaoRetornar onClick={this.props.abreHome}>
          <ContainerLogo src={Logo} alt="Logo 4user"></ContainerLogo>
        </BotaoRetornar>
        <BuscaInputContainer>
          <FormControl>
            <TextField
              label="Pesquisar"
              variant="outlined"
              id="custom-css-outlined-input"
            />
          </FormControl>
        </BuscaInputContainer>
        <IconesContainer>
          <ContainerIcones color="primary" aria-label="Add">
            <LoginIcone onClick={this.props.abreLogin} />
          </ContainerIcones>

          <IconButton onClick={this.props.abreCarrinho}>
            <ContainerIcones color="primary">
              <Badge badgeContent={1}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </ContainerIcones>
          </IconButton>
        </IconesContainer>
      </HeaderFlex>
    );
  }
}

export default Header;

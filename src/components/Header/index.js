import React from "react";
import {
  HeaderFlex,
  ContainerLogo,
  InputBusca,
  IconeCarrinho,
  BuscaInputContainer,
  IconesContainer,
} from "./style";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Logo from "../../Logo/logo.png";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

class Header extends React.Component {
  render() {
    return (
      <HeaderFlex>
        <ContainerLogo src={Logo} alt="Logo 4user" />
        <BuscaInputContainer>
          <FormControl>
            <TextField
              label="Perquisar"
              variant="outlined"
              id="custom-css-outlined-input"
            />
          </FormControl>
        </BuscaInputContainer>
        <IconesContainer>
          <Fab color="primary" aria-label="Add">
            <PersonOutlineOutlinedIcon />
          </Fab>

          <IconButton>
            <Fab color="primary">
              <Badge badgeContent={1}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Fab>
          </IconButton>
        </IconesContainer>
      </HeaderFlex>
    );
  }
}

export default Header;

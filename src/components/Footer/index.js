import React from "react";
import { ContainerFooter } from "./style";
import { Facebook } from "./style";
import { Instagram } from "./style";
import { Twitter } from "./style";

class Footer extends React.Component {
  render() {
    return (
      <ContainerFooter>
        <Facebook />
        <Instagram />
        <Twitter />
      </ContainerFooter>
    );
  }
}

export default Footer;

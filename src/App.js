//
//
// ATENÇÃO: Não é necessário mexer neste arquivo.
// Novos componentes devem ir dentro do componente AppContainer
//
//

import React from "react";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
} from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppContainer } from "./Containers/AppContainer";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004275",
    },
    secondary: {
      light: "#fcd0a7",
      main: "#a58375",
    },
  },
});

function App() {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </MuiThemeProvider>
    </JssProvider>
  );
}

export default App;

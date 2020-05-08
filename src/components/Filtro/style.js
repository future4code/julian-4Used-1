import styled from "styled-components";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

export const BarraFiltroContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const FiltroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 40px;
`;

export const FormControle = styled(FormControl)``;

export const InputContainer = styled(TextField)``;

export const LabelSelect = styled(InputLabel)``;

export const SelectContainer = styled(Select)`
  margin-top: 18px;
  width: 100px;
`;

export const Option = styled(MenuItem)``;

export const Botao = styled(Button)`
  margin: auto;
  height: 80px;
  @media screen and (max-width: 500px) {
    margin-top: 10px;
    height: 40px;
  }
`;

export const SortContainer = styled.div`
  margin-top: 38px;
`;

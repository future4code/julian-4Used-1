import styled from "styled-components";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  OutlinedInput
} from "@material-ui/core";

export const BarraFiltroContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const FiltroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FormControle = styled(FormControl)`
  padding: .5em 0;
`;

export const InputContainer = styled(TextField)`
  margin-right: 1em;
`;

export const LabelSelect = styled(InputLabel)``;

export const SelectContainer = styled(Select)`
  width: 150px;
`;

export const Option = styled(MenuItem)``;

export const Botao = styled(Button)`
  margin: 1em;
`;

export const SortContainer = styled.div`
`;

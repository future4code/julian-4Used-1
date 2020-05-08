import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Upload from "@material-ui/icons/Publish";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export const CadastroContainer = styled.div``;

export const HeaderContainer = styled.div`
  background-color: blue;
  height: 100px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CadastroProdutoFoto = styled.img`
  width: 500px;
  height: 500px;
`;

export const ImagemContainer = styled.div``;

export const CadastroBodyContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export const BotaoCadastrar = styled(Button)`
  margin-top: 100px;
`;

export const BotaoUpload = styled(Upload)`
  margin-top: 20px;
  cursor: pointer;
`;

export const BoxFoto = styled.div`
  display: flex;
`;

export const InputContainer = styled(TextField)`
  width: 200px;
`

export const SelectContainer = styled(Select)`
  width: 200px;
`

export const FormControle = styled(FormControl)``

export const SelectLabel = styled(InputLabel)``

export const Option = styled(MenuItem)``
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const LoginContainer = styled.div`
  background-color: #004275;
`;

export const HeaderContainer = styled.div`
  background-color: blue;
  height: 100px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const FormBox = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #a5c1ce;
`;

export const BotaoEntrar = styled(Button)`
  margin-top: 30px;
  :hover {
    background-color: #004275;
    color: white;
  }
`;

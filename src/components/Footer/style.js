import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export const ContainerFooter = styled.div`
  height: 10vh;
  background-color: #a5c1ce;
  width: 100vw;
`;

export const Facebook = styled(FacebookIcon)`
  height: 10vh;
  margin-left: 20px;
`;

export const Instagram = styled(InstagramIcon)`
  margin-left: 20px;
  height: 10vh;
`;

export const Twitter = styled(TwitterIcon)`
  margin-left: 20px;
  height: 10vh;
`;

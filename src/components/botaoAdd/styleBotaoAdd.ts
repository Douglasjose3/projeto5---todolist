import styled from "styled-components";
import { Link } from "react-router-dom";
import variaveis from "../../styles/variaveis";

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  right: 40px;
  bottom: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-family: Roboto, sans-serif;
  text-decoration: none;
`;

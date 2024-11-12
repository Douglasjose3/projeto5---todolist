import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Dosis", serif;
        list-style: none;
    }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
  // Exporta o componente estilizado 'Container', que usa a tag <main> como base.
  padding: 40px; // Adiciona um espaço interno (padding) de 40px em torno do conteúdo para afastá-lo das bordas.
  height: 95vh; // Define a altura do componente como 95% da altura total da janela de visualização.
  overflow-y: scroll; // Permite rolagem vertical caso o conteúdo ultrapasse a altura definida.
`;

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`;

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
`;

export const Botoes = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`;

export const BotaoSalvar = styled(Botoes)`
  background-color: ${variaveis.verde};
`;

export default EstiloGlobal;

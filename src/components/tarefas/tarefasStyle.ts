import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import * as enums from "../../utils/enums/EnumsTarefas";
import { Botoes } from "../../styles/styles";

type TagProps = {
  prioridade?: enums.Prioridade;
  status?: enums.Status;
  parametro: "status" | "prioridade"; // pipe | = a "ou"
};

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === "prioridade") {
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.vermelho;
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.amarelo;
  } else {
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde;
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo2;
  }
  return "#ccc";
}

export const Card = styled.div`
  border-radius: 16px;
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: bold;
  font-family: Roboto Mono, monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid rgb(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const BotaoCancelarRemover = styled(Botoes)`
  background-color: ${variaveis.vermelho};
`;

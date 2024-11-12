import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./tarefasStyle";
import * as enums from "../../utils/enums/EnumsTarefas";
import {
  alteraStatus,
  editar,
  remover,
} from "../../store/reducers/TarefasReducers";
import ModelsTarefas from "../../models/ModelsTarefas";
import { BotaoSalvar, Botoes } from "../../styles/styles";

// type Props = {
//   titulo: string;
//   descricao: string;
//   prioridade: enums.Prioridade;
//   status: enums.Status;
// };

type Props = ModelsTarefas; // type Props acima, mudou para esse.

const Tarefas = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id,
}: Props) => {
  //descontrução do type/props
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal);
    }
  }, [descricaoOriginal]);

  function cancelarEdicao() {
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }));
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao: descricaoOriginal,
                    id,
                  })
                );
                setEstaEditando(false);
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botoes onClick={() => setEstaEditando(true)}>Editar</Botoes>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
};

export default Tarefas;

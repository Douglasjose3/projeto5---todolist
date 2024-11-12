import { useDispatch, useSelector } from "react-redux";
import * as S from "./filtroCardsStyles";
import { alterarFiltro } from "../../store/reducers/FiltroReducers";
import * as enums from "../../utils/enums/EnumsTarefas";
import { RootReducer } from "../../store/IndexStore";

export type Props = {
  legenda: string;
  criterio: "prioridade" | "status" | "todas";
  valor?: enums.Prioridade | enums.Status;
};

const FiltroCards = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch();

  const { filtro, tarefas } = useSelector((state: RootReducer) => state);

  const verificarEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio;
    const mesmoValor = filtro.valor === valor;

    return mesmoCriterio && mesmoValor;
  };

  const contarTarefa = () => {
    if (criterio === "todas") return tarefas.itens.length;
    if (criterio === "prioridade")
      return tarefas.itens.filter((item) => item.prioridade === valor).length;
    if (criterio === "status")
      return tarefas.itens.filter((item) => item.status === valor).length;
  };

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor,
      })
    );
  };

  const contador = contarTarefa();
  const ativo = verificarEstaAtivo();

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  );
};

export default FiltroCards;

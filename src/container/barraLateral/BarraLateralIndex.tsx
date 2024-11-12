import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FiltroCards from "../../components/filtroCards/FiltroCards";
import { RootReducer } from "../../store/IndexStore";
import { alteraTermo } from "../../store/reducers/FiltroReducers";
import * as enums from "../../utils/enums/EnumsTarefas";
import * as S from "./barraLateralStyles";
import { Botoes, Campo } from "../../styles/styles";

type Props = {
  mostrarFiltros: boolean;
};

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCards
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda={"pendentes"}
              />
              <FiltroCards
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda={"concluídas"}
              />
              <FiltroCards
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda={"importantes"}
              />
              <FiltroCards
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda={"normal"}
              />
              <FiltroCards
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda={"urgentes"}
              />
              <FiltroCards criterio="todas" legenda={"todas"} />
            </S.Filtros>
          </>
        ) : (
          <Botoes onClick={() => navigate("/")}>
            Voltar a lista de tarefas
          </Botoes>
        )}
      </div>
    </S.Aside>
  );
};

export default BarraLateral;

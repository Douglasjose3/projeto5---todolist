import { useSelector } from "react-redux"; // Importa o hook useSelector do React Redux para acessar o estado global da aplicação
import Tarefas from "../../components/tarefas/TarefasIndex"; // Importa o componente Tarefas, usado para renderizar cada tarefa individual
import { RootReducer } from "../../store/IndexStore"; // Importa o tipo RootReducer, que representa o formato do estado global
import { MainContainer, Titulo } from "../../styles/styles"; // Importa o componente estilizado Container para estruturar a lista de tarefas

// Define o componente funcional ListaDeTarefas
const ListaDeTarefas = () => {
  // Usa o hook useSelector para acessar a lista de tarefas no estado global. Puxa o array `tarefas` da store global.
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  );

  const filtraTarefas = () => {
    let tarefasFiltradas = itens;
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      );
      if (criterio === "prioridade") {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        );
      } else if (criterio === "status") {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        );
      }
      return tarefasFiltradas;
    } else {
      return itens;
    }
  };

  const exibeResultadoFiltrado = (quantidade: number) => {
    let mensagem = "";
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : "";

    if (criterio === "todas") {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`;
    } else {
      mensagem = `${quantidade} tarefa(s) encontada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`;
    }
    return mensagem;
  };

  const tarefas = filtraTarefas();
  const mensagem = exibeResultadoFiltrado(tarefas.length);

  return (
    <MainContainer>
      {/* Exibe o número de tarefas e sua categoria, permitindo ao usuário saber quantas tarefas estão listadas */}
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {/* Itera sobre cada item em `tarefas` para renderizar um item da lista para cada tarefa */}
        {tarefas.map((t) => (
          <li key={t.titulo}>
            {" "}
            {/* Define uma chave única usando o título da tarefa para facilitar a renderização */}
            <Tarefas
              id={t.id} // Passa o ID da tarefa para o componente Tarefas
              descricao={t.descricao} // Passa a descrição da tarefa
              titulo={t.titulo} // Passa o título da tarefa
              prioridade={t.prioridade} // Passa a prioridade da tarefa, ex. alta ou baixa
              status={t.status} // Passa o status da tarefa, ex. pendente ou concluída
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default ListaDeTarefas; // Exporta o componente para ser utilizado em outras partes da aplicação

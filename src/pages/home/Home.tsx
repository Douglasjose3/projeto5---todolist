import IndexBotaoAdd from "../../components/botaoAdd/IndexBotaoAdd";
import BarraLateral from "../../container/barraLateral/BarraLateralIndex";
import ListaDeTarefas from "../../container/listaDeTarefas/indexListaDeTarefas";

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <IndexBotaoAdd />
    </>
  );
};

export default Home;

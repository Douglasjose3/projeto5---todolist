import BarraLateral from "../../container/barraLateral/BarraLateralIndex";
import IndexFormulario from "../../container/formulario/IndexFormulario";

const IndexCadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <IndexFormulario />
    </>
  );
};

export default IndexCadastro;

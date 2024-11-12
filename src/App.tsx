import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/IndexStore";
import EstiloGlobal, { Container } from "./styles/styles";
import Home from "./pages/home/Home";
import IndexCadastro from "./pages/cadastro/IndexCadastro";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/novo",
    element: <IndexCadastro />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;

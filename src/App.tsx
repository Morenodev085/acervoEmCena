import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobralStyle } from "./styled";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import MostraPage from "./pages/Mostra";
import PaginaRodada from "./pages/Perfil";
import Layout from "./pages/Layout"; // <-- adicione aqui

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // <- agora usa Layout com ScrollToTop
    children: [
      { path: "/", element: <Home /> },
      { path: "/Programacao", element: <Calendar /> },
      { path: "/:type", element: <MostraPage /> },
      { path: "/rodadaDeNegocios", element: <PaginaRodada /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobralStyle />
      <RouterProvider router={rotas} />
    </>
  );
}

export default App;

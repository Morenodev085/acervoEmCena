import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { GlobralStyle } from "./styled"
import Home from "./pages/Home"
import Calendar from "./pages/Calendar"
import MostraPage from "./pages/Mostra"

const rotas = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Programacao',
    element:<Calendar/>
  },
  {
    path:'/:type',
    element: <MostraPage/>
  }
])

function App() {


  return (
    <>
      <GlobralStyle />
    <RouterProvider router={rotas}/>
    </>
  )
}

export default App

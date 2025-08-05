import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { GlobralStyle } from "./styled"
import Home from "./pages/Home"
import Calendar from "./pages/Calendar"

const rotas = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Programacao',
    element:<Calendar/>
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

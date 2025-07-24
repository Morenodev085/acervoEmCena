import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { GlobralStyle } from "./styled"
import Home from "./pages/Home"

const rotas = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
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

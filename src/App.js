import axios from "axios"
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import home from "./home"
import Reg from "./Register"

function App()
{
  return(
    <>

      <h1>I am App</h1>
      <BrowserRouter>
      <Routes>
        <Route path = "/reg" element = {<Reg/>}></Route>
        <Route path = "/h" element = {<home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
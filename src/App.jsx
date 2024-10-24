import { Route, Routes } from "react-router-dom"
import { Rounting } from "./Routes/Routing"
import { useContext } from "react"
import { ApiDataContext } from "./Context/API Context/ApiContext"

export const App = () => {
  //  const {isModal , setIsModal} = useContext(ApiDataContext)
 

  return (
    
    <>
    <Routes>

    {
      Rounting.map((item,index)=>(
        <Route key={index} path={item.path} element={item.element}/>
      ))
    }

    </Routes>
    </>
  )
}
export default App

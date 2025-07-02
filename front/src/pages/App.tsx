import { BrowserRouter,Routes,Route } from "react-router-dom"
import  {Auth}  from './auth/index'
import {ROUTES} from '../shared/routes'
import { Header } from '../entity/header'
import { Footer } from "../entity/footer"
import { Admin } from "./admin/index"
function App() {
  return (
    <main className="flex items-center justify-between flex-col min-h-screen">
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.AUTH} element={<Auth/>}/>
            <Route path={ROUTES.ADMIN} element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </main>
   
  )
}

export default App

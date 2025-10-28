import { BrowserRouter,Routes,Route } from "react-router-dom"
import  {Auth}  from '@/pages/auth/index'
import {ROUTES} from '@/shared/routes'
import { Header } from '@/entity/header'
import { Footer } from "@/entity/footer"
import { Admin } from "@/pages/admin/index"
import { DoctorPage } from "@/pages/doctor/index"
import { ReportPage } from "@/pages/report/index"
function App() {
  return (
    <main className="flex items-center justify-between flex-col min-h-screen min-w-[768px]">

        <BrowserRouter>
        <Header/>
          <Routes>
            
            <Route path={ROUTES.AUTH} element={<Auth/>}/>
            <Route path={ROUTES.ADMIN} element={<Admin/>}/>
            <Route path={ROUTES.DOCTOR} element={<DoctorPage/>}/>
            <Route path={ROUTES.REPORT} element={<ReportPage/>}/>
          </Routes>
        </BrowserRouter>
      <Footer/>
    </main>
   
  )
}

export default App

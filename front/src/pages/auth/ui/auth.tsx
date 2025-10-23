import Input from '../../../entity/input/input'
import { useState } from 'react'
import { isAdmin, LoginUser } from '../../../shared/api/userApi'
import { useNavigate } from 'react-router-dom'
import {ROUTES} from '../../../shared/routes'

export const Auth = () => {
    const navigate = useNavigate()
    const [FNS,setFNS] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const data = await LoginUser(FNS,password)
        if(!data){
            const admin = await isAdmin(FNS);
            if(admin){
                navigate(ROUTES.ADMIN)
            } else{
                navigate(ROUTES.DOCTOR)
            }
         
        }else{
               //Изменить на алерт меню
           console.log(data)
        }
        
    }
    
    return(
        <main className="flex items-center flex-col h-1/3 w-1/3 bg-slate-400 min-w-[270px]">
            <div className="border-b-2 border-white w-full text-center">
                <p className="text-2xl m-5">Авторизация</p>
            </div>
            <form onSubmit={handleLogin} className='flex flex-col items-center justify-around p-5 gap-6'>
                <Input placeholder="Ф.И.О..." type='text' width='w-64' method={setFNS}/>
                <Input placeholder="Пароль..." type='password' width='w-64' method={setPassword}/>
                <button
                    className="w-36 bg-white p-1 text-xl rounded-lg mt-5
                        active:bg-white
                    transition-all delay-40 hover:bg-stone-300">
                        Войти
                </button >
            </form>
        </main>
    )
}

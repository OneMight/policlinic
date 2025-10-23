import { useNavigate } from 'react-router-dom'
import {Logout, useGetDataToken} from '../../shared/api/userApi'

export const Header = () =>{
    const navigate = useNavigate()
    const handleExit = () =>{
        Logout()
        navigate('/')
        window.location.reload()
    }

    const {user} = useGetDataToken()

    return(
        <main className="flex flex-row justify-between w-full h-[80px] bg-slate-300 items-center p-10">
            <p className="font-medium font-mono text-3xl">Поликлиника</p>
            {user? (
                <button
                    className="w-36 bg-white p-1 text-xl rounded-lg mt-5
                    active:bg-white
                    transition-all delay-40 hover:bg-stone-300" onClick={() =>handleExit()}>
                    Выйти
                </button>
            ): (<></>)}
           
        </main>
    )
}
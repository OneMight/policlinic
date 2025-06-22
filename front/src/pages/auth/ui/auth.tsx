import Input from '../../../entity/input/input'
import { Button } from '../../../entity/Button/index'
import { useState } from 'react'
export const Auth = () => {

    const [FNS,setFNS] = useState('')
    const [password, setPassword] = useState('')

    const handleAuth = () =>{

    }

    return(
        <main className="flex items-center flex-col h-1/3 w-1/3 bg-slate-400 min-w-[270px]">
            <div className="border-b-2 border-white w-full text-center">
                <p className="text-2xl m-5">Авторизация</p>
            </div>
            <div className='flex flex-col items-center justify-around p-5 gap-6'>
                <Input placeholder="Ф.И.О..." type='text' method={setFNS}/>
                <Input placeholder="Пароль..." type='password' method={setPassword}/>
                <Button method={handleAuth}/>
            </div>
        </main>
    )
}

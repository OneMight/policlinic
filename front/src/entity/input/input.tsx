import type { ChangeEvent } from "react"
import type { IInput } from "../../Interfaces/Interfaces"
const Input = ({type, placeholder, method}:IInput)  =>{
    const handleSetData = (event: ChangeEvent<HTMLInputElement>) =>{
        method(event.target.value)
    }
    return(
            <input
                className="w-64 p-2 pl-3 rounded-xl
                 border-[1px] border-black shadow-lg outline-none
                 focus:bg-slate-100 transition-all delay-75 "
                type={type}
                placeholder={placeholder}
                onChange={handleSetData}
                required
            />
    )
}

export default Input
import type {ButtonEmployeeProps} from '@/types/types'

export const ButtonEmployee = ({placeholder, onClick}:ButtonEmployeeProps) =>{
    return(
        <button
        onClick={onClick}
            className="w-[150px] py-3 bg-white border-solid border-2 border-black rounded-2xl">
            {placeholder}
        </button>
    )
}

export default ButtonEmployee
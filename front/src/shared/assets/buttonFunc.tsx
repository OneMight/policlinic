import type {ButtonProps} from '@/types/types'

export const ButtonFunc = ({placeholder, onClick}:ButtonProps) =>{
    return(
        <button
        onClick={onClick}
            className="w-[150px] py-3 bg-white border-solid border-2 border-black rounded-2xl drop-shadow-lg">
            {placeholder}
        </button>
    )
}

export default ButtonFunc
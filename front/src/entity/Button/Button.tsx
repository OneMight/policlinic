import type {IButton} from '../../Interfaces/Interfaces'
export const Button = (method: IButton) =>{
    return(
        <button
         className="w-36 bg-white p-1 text-xl rounded-lg mt-5
             active:bg-white
          transition-all delay-40 hover:bg-stone-300"
         onClick={() => method}>
            Войти
        </button>
    )
}
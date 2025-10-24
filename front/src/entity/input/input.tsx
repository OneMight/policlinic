import type { ChangeEvent } from "react"
import type { IInput } from "../../types/types"
const Input = ({type, placeholder, method, width, value, autoCapitalize}:IInput)  =>{
   const handleSetData = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (autoCapitalize) {
      newValue = newValue.replace(/(^\s*[а-яёa-z])|(\s+[а-яёa-z])/gi, (match) => match.toUpperCase());
    }

    method(newValue);
  };

    return(
            <input
                className={`${width} p-2 pl-3 rounded-xl
                 border-[1px] border-black shadow-lg outline-none
                 focus:bg-slate-100 transition-all delay-75 `}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleSetData}
                required
            />
    )
}

export default Input
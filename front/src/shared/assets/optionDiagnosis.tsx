import type { DiagnosisProps, Diagnosis } from "@/types/types"

export const OptionDiagnosis = ({diagnosis, handleSetIdDiagnose}:DiagnosisProps) =>{

    return(
         <select name="SelectDiagnose" id="selectDiagnose"
         onChange={handleSetIdDiagnose}
            className="rounded-xl p-3">
                {
                    diagnosis.map((data:Diagnosis) =>(
                        <option key={data.id} value={data.id}>{data.code}</option>
                    ))
                }
            </select>
    )
}
export default OptionDiagnosis
export interface IInput{
    type:string,
    placeholder:string,
    width: string,
    value?: string | number,
    method: (NFS: string) => void,
    autoCapitalize?:boolean,
}

export interface User{
    id: number,
    FIO_employee: string,
    isAdmin: boolean,
    category: Category,

}

export interface DataToken{
    user: User,
    isLoading?: boolean,
    error?: Error | null,
}
enum Category {
    oft = 'Офтальмолог'
}
export interface CookieValues {
  name?: string;
}
export interface Patient{
    FIO_Patience: string,
    age: number,
    discount?: number
}
export interface ButtonProps{
    placeholder: string
    onClick?: () => void
}

export interface Diagnosis{
    code: string,
    name: string,
    id: number
}
export interface DiagnosisProps{
    diagnosis: Diagnosis[],
    handleSetIdDiagnose: (event: React.ChangeEvent<HTMLSelectElement>)=> void
}

export interface Report{
    idAppoitment: number,
    diagnose: string,
    Employee: string,
    cost: number,
    patientFIO: string,
    discount: number
}
export interface Reports{
    rep: Report[],
    allRep: Report[],
}

export interface GenerateReport{
    rep: Report[],
    name: string,
    doctorCount: number,
    allLength: number | undefined
}

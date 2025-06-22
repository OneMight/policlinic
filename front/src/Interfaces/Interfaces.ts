export interface IInput{
    type:string,
    placeholder:string,
    method: (NFS: string) => void,
}
export interface IButton{
    method: (NFS:string, password:string) => void
}
export interface IInput{
    type:string,
    placeholder:string,
    width: string,
    value?: string | number,
    method: (NFS: string) => void,
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


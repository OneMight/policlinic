export interface Ticket{
    FIO_Employee: string,
    goal: string,
    FIO_Patience: string,
    cost: number,
    date: Date,
    time: string,
    isLoading?: boolean,
    error?: Error | null,
}


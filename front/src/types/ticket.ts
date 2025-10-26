import type { Patient } from "./types"

export interface Ticket{
    FIO_Employee: string,
    goal: string,
    FIO_Patience: string,
    cost: number,
    date: Date,
    time: string,
    Patience: Patient
    isLoading?: boolean,
    error?: Error | null,
}


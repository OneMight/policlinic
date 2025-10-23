export interface Appointment{
    diagnose: string,
    id: number,
    isLoading?: boolean,
    error?: Error | null,
}
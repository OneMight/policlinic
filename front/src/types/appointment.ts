import type { Ticket } from "./ticket";

export interface Appointment{
    Ticket: Ticket
    diagnose: string,
    idAppoitment: number,
    isLoading?: boolean,
    error?: Error | null,
}

export interface PatientDivProps{
    appointmentInf: Appointment,
    setSelectedApp: (id:number) => void,
    select: number | null,

}
export interface AppointmentDescProps{
    selectAppointment:Appointment | undefined
     setSelectedApp: (value: null) => void,
}
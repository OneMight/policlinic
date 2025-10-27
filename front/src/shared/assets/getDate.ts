export const getCurrentDate = () =>{
    const date = new Date()
    return `${date.getDate()<10? `0${date.getDate()}` : `${date.getDate()}`}.${date.getMonth()+1<10? `0${date.getMonth()+1}`:`${date.getMonth()+1}`}.${date.getFullYear()}`
}

export const convertDate = (date: Date, time: string) =>{
    const dateObj = new Date(date)
    return `${dateObj.getDate()<10 ? `0${dateObj.getDate()}` : `${dateObj.getDate()}`}.`+
    `${dateObj.getMonth()+1<10? `0${dateObj.getMonth()+1}`:`${dateObj.getMonth()+1}`}.`+
    `${dateObj.getFullYear()} ${time}`
}

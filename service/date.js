export const RemoveRepeatedDates = (dates) => {
    const uniqueDates = []
    dates.forEach((date => {
        if(uniqueDates.indexOf(date.formattedDate) === -1){
            uniqueDates.push(date.formattedDate)
        }
    }))
    return uniqueDates
}

export const sortDates = (dates) => { 
    dates.sort((a, b) => {
        const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
        const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
        return firstDate - secondDate
    })
}
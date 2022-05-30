export function numberFormat(number, decimals = 0) {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: decimals
    }).format(Number(number));
}

export function dateFormat(date, format = 'medium') {
    date = new Date(date * 1000)
    return Intl.DateTimeFormat("id-ID",{dateStyle: format}).format(date)
}
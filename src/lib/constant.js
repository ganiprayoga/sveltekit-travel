export function numberFormat(number, decimals = 0) {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: decimals
    }).format(Number(number));
}

export function dateFormat(date) {
    date = new Date(date * 1000)
    return Intl.DateTimeFormat("id-ID").format(date)
}
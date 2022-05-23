export function numberFormat(number, decimals = 0) {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: decimals
    }).format(Number(number));
}
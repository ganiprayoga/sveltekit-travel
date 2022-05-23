import numeral from 'numeral';

function loadLocale(){
    numeral.register('locale','id', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        currency: {
            symbol: 'Rp'
        }
    });

    numeral.locale('id')
}

export function numberFormat(number) {
    // loadLocale();
    return numeral(Math.round(number)).format('0,0')
}
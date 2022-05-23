import numeral from 'numeral';

function loadLocale() {
    if (numeral.locales['id'] === undefined) {
        numeral.register('locale', 'id', {
            delimiters: {
                thousands: '.',
                decimal: ','
            },
            abbreviations: {
                thousand: 'K',
                million: 'm',
                billion: 'b',
                trillion: 't'
            },
            currency: {
                symbol: 'Rp'
            }
        });
    }
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({event, resolve}) {
    loadLocale();
    if (event.url.pathname.startsWith('/profile')) {
        // return new Response('custom response');
        console.log('custom response');
    }

    const response = await resolve(event);
    return response;
}
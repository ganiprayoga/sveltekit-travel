/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    if (event.url.pathname.startsWith('/profile')) {
        // return new Response('custom response');
        console.log('custom response');
    }

    const response = await resolve(event);
    return response;
}
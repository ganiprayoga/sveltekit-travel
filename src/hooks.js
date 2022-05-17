export const getSession = (request) => {
    console.log(request);

    return {
        user: {
            id: '120388',
            name: 'Gani',
            role: 'admin'
        },
    }
}
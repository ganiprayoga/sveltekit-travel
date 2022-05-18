import { browser } from '$app/env'

export function browserGet(key) {
    if (browser) {
        const item = localStorage.getItem(key)
        if (item) {
            return JSON.parse(item)
        }
    }
    return null
}

export function browserSet(key, value) {
    if (browser) {
        localStorage.setItem(key, value)
    }
}

export async function post(fetch, url, body) {
    let customError = false
    try {
        let headers = {}
        if (!(body instanceof FormData)) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(body)
        }
        const token = browserGet('DOLAPIKEY')
        if (token) {
            headers['DOLAPIKEY'] = token
        }
        const res = await fetch(url, {
            method: 'POST',
            body,
            headers
        })
        if (!res.ok) {
            try {
                const data = await res.json()
                const error = data.message[0].message[0]
                customError = true
                throw { id: error.id, message: error.message }
            } catch (err) {
                console.log(err)
                throw err
            }
        }
        return res
    } catch (err) {
        console.log(err)
        throw customError ? err : { message: 'An unknown error has occured' }
    }
}

export async function get(fetch, url, body = null) {
    let customError = false
    try {
        let headers = {}
        if (body != null && !(body instanceof FormData)) {
            body = new URLSearchParams(body)
        }

        const token = browserGet('DOLAPIKEY')
        if (token) {
            headers['DOLAPIKEY'] = token
        }

        const res = await fetch(url + body)

        if (!res.ok) {
            try {
                const data = await res.json()
                const error = data.message[0].message[0]
                customError = true
                throw { id: error.id, message: error.message }
            } catch (err) {
                console.log(err)
                throw err
            }
        }
        try {
            const json = await res.json()
            return json
        } catch (err) {
            console.log(err)
            throw { id: '', message: 'An unknown error has occured' }
        }

        return res
    } catch (err) {
        console.log(err)
        throw customError ? err : { message: 'An unknown error has occured' }
    }
}
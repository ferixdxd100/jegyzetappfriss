const BASE = 'https://nodejs215.dszcbaross.edu.hu/api'

export async function register(name, username, password) {
    const res = await fetch(`${BASE}/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, username, password})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function login(username, password) {
    const res = await fetch(`${BASE}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({username, password})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function logout() {
    const res = await fetch(`${BASE}/logout`, {
        method: 'POST',
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function adataim() {
    const res = await fetch(`${BASE}/me`, {
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return {result: false}
    else return {result: true, user: data}
}

export async function getNotes() {
    const res = await fetch(`${BASE}/notes`, {
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, notes: data}
}

export async function createNote(title, content) {
    const res = await fetch(`${BASE}/notes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({title, content})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function updateNote(id, title, content) {
    const res = await fetch(`${BASE}/notes/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({title, content})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function deleteNote(id) {
    const res = await fetch(`${BASE}/notes/${id}`, {
        method: 'DELETE',
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function usernameModositas(ujUsername) {
    const res = await fetch(`${BASE}/username`, {
        method: 'PUT',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ujUsername})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function jelszoModositas(jelenlegiJelszo, ujJelszo) {
    const res = await fetch(`${BASE}/jelszo`, {
        method: 'PUT',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({jelenlegiJelszo, ujJelszo})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function fiokTorlese() {
    const res = await fetch(`${BASE}/fiokom`, {
        method: 'DELETE',
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

export async function nevModositas(ujNev) {
    const res = await fetch(`${BASE}/nev`, {
        method: 'PUT',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ujNev})
    })
    const data = await res.json()
    if (!res.ok) return {result: false, message: data.message}
    else return {result: true, message: data.message}
}

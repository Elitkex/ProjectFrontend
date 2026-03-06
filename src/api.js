const BASE = 'http://localhost:3000'

export async function regisztracio(email, felhasznalonev, jelszo) {
    const res = await fetch(`${BASE}/regisztracio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, felhasznalonev, jelszo, admin: 0 })
    })
    const data = await res.json();
    if (!res.ok) return { result: false, message: data.message };
    else return { result: true, message: data.message };
}
export async function belepes(felhasznalonevVagyEmail, jelszo) {
    const res = await fetch(`${BASE}/belepes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ felhasznalonevVagyEmail, jelszo })
    })
    const data = await res.json();
    if (!res.ok) return { result: false, message: data.message };
    else return { result: true, message: data.message };
}
export async function kijelentkezes() {
    const res = await fetch(`${BASE}/kijelentkezes`, {
        method: 'POST',
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return { result: false, message: data.message }
    else return { result: true, message: data.message }
}

export async function adataim() {
    const res = await fetch(`${BASE}/adataim`, {
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return { result: false, message: data.message }
    else return { result: true, data }
}

export async function getDecks() {
    const res = await fetch(`${BASE}/decks`, {
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return { result: false, message: data.message }
    else return { result: true, data }
}

export async function getKartyak() {
    const res = await fetch(`${BASE}/kartyak`, {
        credentials: 'include'
    })
    const data = await res.json()
    if (!res.ok) return { result: false, message: data.message }
    else return { result: true, data }
}
export async function ujFelhasznalonev(ujFelhasznalonev) {
    const res = await fetch(`${BASE}/felhasznalonev`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ujFelhasznalonev })
    })
    const data = await res.json()
    return { result: res.ok, message: data.message }
}

export async function ujEmail(ujEmail) {
    const res = await fetch(`${BASE}/email`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ujEmail })
    })
    const data = await res.json()
    return { result: res.ok, message: data.message }
}

export async function ujJelszo(ujJelszo) {
    const res = await fetch(`${BASE}/jelszo`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ ujJelszo })
    })
    const data = await res.json()
    return { result: res.ok, message: data.message }
}

export async function fioktorles() {
    const res = await fetch(`${BASE}/fioktorles`, {
        method: 'DELETE',
        credentials: 'include'
    })
    const data = await res.json()
    return { result: res.ok, message: data.message }
}
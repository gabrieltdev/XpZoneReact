import api from "./api.js"
// get routes

// games nearby
export async function GamesNearby(token) {
    const res = await api.get("game/close-to-you", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data
}

// filter games by console
export async function GamesByConsole(id, token) {
    const res = await api.get(`game/console/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data
}

// game counter per console
export async function GamesConsoleCount(id) {
    const res = await api.get(`game/console/count/${id}`)
    return res.data
}

// game counter for all consoles
export async function GamesConsoles() {
    const res = await api.get(`game/console/list-count`)
    return res.data
}

// game counter per console
export async function GamesCategorieCount(id) {
    const res = await api.get(`game/categorie/count/${id}`)
    return res.data
}

//filter and search

// filter summary
export async function FilterSummary(token) {
    const res = await api.get("game/filters-summary", {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return res.data
}

// filter game search
export async function SearchGames(token, params) {
    const res = await api.get("game/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            city: params?.city || undefined,
            consoles: params?.consoles || undefined,
            trade_type: params?.trade_type || undefined,
            condition: params?.condition || undefined,
            search: params?.search || undefined,
            orderBy: params?.orderBy || undefined
        }
    });
    return res.data
}

// get cities existing
export async function CitiesOptions() {
    const res = await api.get(`game/cities`)
    return res.data
}

//
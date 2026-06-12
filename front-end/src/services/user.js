import api from "./api.js"
// post routes

// create user
export async function createUser(userData) {
    const res = await api.post("user/register", userData);
    return res.data;
};

// validation nickname and email
export async function checkUser(data) {
    const res = await api.post("user/register/validate-email-nickname", data);
    return res.data
}

// cheking user for create account
export async function getUser() {
    const res = await api.post("user/login");
    return res.data
}

// login user
export async function loginUser(data) {
    const res = await api.post("user/login", data);
    return res.data
}

// token verification
export async function checkToken(token) {
    const res = await api.post("user/verify", {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data
}

// get routes

//  Search users nearby
export async function SearchUsersNearby(token) {
    const res = await api.get("user/users-nearby", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data
}
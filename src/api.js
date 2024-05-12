const host = "https://wedev-api.sky.pro/api/v2/todos";
const userUrl = "https://wedev-api.sky.pro/api/user";

export let token;

export const setToken = (newToken) => {
    token = newToken;
};

export function getTodos() {
    return fetch(host, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status === 401) {
            throw new Error("Нет авторизации");
        }
        return response.json();
    });
}

export function deleteTodos(id) {
    return fetch(host + "/" + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        return response.json();
    });
}

export function addTodos(textInputElement) {
    return fetch(host, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            text: textInputElement.value,
        }),
    }).then((response) => {
        return response.json();
    });
}

export function login({ login, password }) {
    return fetch(userUrl + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Bad request");
        }
        return response.json();
    });
}

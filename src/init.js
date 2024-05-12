import { deleteTodos, addTodos, login, setToken } from "./api.js";
import { fetchAndRenderTasks } from "./fetchAndRender.js";

export function initDeleteButtonEventListener() {
    const deleteButtons = document.querySelectorAll(".delete-button");

    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const id = deleteButton.dataset.id;

            deleteTodos(id).then(() => {
                fetchAndRenderTasks();
            });
        });
    }
}

export function initAddButtonEventListener() {
    const buttonElement = document.getElementById("add-button");
    const textInputElement = document.getElementById("text-input");

    buttonElement.addEventListener("click", () => {
        if (textInputElement.value === "") {
            return;
        }

        buttonElement.disabled = true;
        buttonElement.textContent = "Элемент добавлятся...";

        addTodos(textInputElement)
            .then(() => {
                return fetchAndRenderTasks();
            })
            .then(() => {
                buttonElement.disabled = false;
                buttonElement.textContent = "Добавить";
                textInputElement.value = "";
            });
    });
}

export let userName;

export function initLoginButtonEventListener() {
    const buttonElement = document.getElementById("login-button");
    const loginInputElement = document.getElementById("login-input");
    const passwordInputElement = document.getElementById("password-input");

    buttonElement.addEventListener("click", () => {
        login({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        })
            .then((responseData) => {
                setToken(responseData.user.token);
                userName = responseData.user.name;
            })
            .then(() => {
                fetchAndRenderTasks();
            })
            .catch((error) => {
                if (error.message === "Bad request") {
                    alert("Вы ввели неправильные данные");
                }
            });

        loginInputElement.value = "";
        passwordInputElement.value = "";
    });
}

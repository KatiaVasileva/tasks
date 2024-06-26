import { initLoginButtonEventListener } from "./init.js";

export const renderLogin = () => {
    const appElement = document.getElementById("app");

    const loginHtml = `
    <h1>Страница входа</h1>
    <div class="form">
        <h3 class="form-title">Форма входа</h3>
        <div class="form-row">
            <input type="text" id="login-input" class="input" placeholder="Логин">
            <input type="text" id="password-input" class="input" placeholder="Пароль">
        </div>
        <br />
        <button class="button" id="login-button">Войти</button>
    </div>
    `;

    appElement.innerHTML = loginHtml;

    initLoginButtonEventListener();
};

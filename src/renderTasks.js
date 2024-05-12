import {
    initAddButtonEventListener,
    initDeleteButtonEventListener,
} from "./src/init.js";
import { sanitizeHtml } from "./utilities.js";
import { userName } from "./init.js";
import { format } from "date-fns";

export function renderTodos({ tasks }) {
    const appElement = document.getElementById("app");

    const tasksHtml = tasks
        .map((task) => {
            const country = "ru";
            const createDateRu = format(
                new Date(task.created_at),
                "dd/MM/yyyy HH:mm",
            );
            const createDateUs = format(
                new Date(task.created_at),
                "MM/dd/yyyy hh:mm bbb",
            );
            return `
         <li class="task">
            <p class="task-text">
               ${sanitizeHtml(task.text)} (Создал: ${task.user?.name ?? "Неизвестно"})
               <button data-id="${task.id}" 
               class="button delete-button">Удалить</button>
            </p>
            <p><i>Задача создана: ${country === "ru" ? createDateRu : createDateUs}</i></p>
         </li>`;
        })
        .join("");

    const appHtml = `
        <h1>Список задач</h1>
        <ul class="tasks" id="list">${tasksHtml}</ul>
        <br />
        <div class="form">
            <h3 class="form-title">Форма добавления</h3>
            <p class="form-name">Имя пользователя: ${userName}</p>
            <div class="form-row">
                Что нужно сделать:
                <input type="text" id="text-input" class="input" placeholder="Выпить кофе" />
            </div>
            <br />
            <button class="button" id="add-button">Добавить</button>
        </div>
    `;

    appElement.innerHTML = appHtml;

    initDeleteButtonEventListener();

    initAddButtonEventListener();
}

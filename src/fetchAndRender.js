import { renderTodos } from "./renderTasks.js";
import { getTodos } from "./api.js";

export function fetchAndRenderTasks() {
    getTodos().then((responseData) => {
        let tasks = responseData.todos;
        renderTodos({ tasks });
        return true;
    });
}

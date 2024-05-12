# Документация API “Список задач” v2

Все апи работают с авторизацией. Можно использовать 2 варианта авторизации

- Авторизация по паролю: передайте в заголовке Authorization секретный пароль "123456"
- Авторизация по Bearer токену: передайте в заголовке Authorization пользовательский токен "Bearer ksdfsksdfjfsdjk". Токен можно получить в [апи авторизации](../../user/README.md)

Запросы без авторизации возвращают 401 статус ответа

## Получить список задач

адрес: https://wedev-api.sky.pro/api/v2/todos

метод: GET

Возвращает статус код 200 и список задач в формате JSON, у каждой задачи указан автор задачи, если он известен, например

```json
{
{
  "todos": [
    { "id": 1, "text": "Сделать чаю", "user": null },
    { "id": 2, "text": "Выпить чаю", "user": null },
    { "id": 3, "text": "Отдохнуть", "user": null },
    {
      "text": "asd",
      "id": 4,
      "user": { "id": 1, "login": "admin", "name": "Админ Глеб" }
    }
  ]
}
}
```

## Добавить новую задачу в список

адрес: https://wedev-api.sky.pro/api/v2/todos

метод: POST

Принимает новую задачу, описанную в формате JSON, например:

```json
{ "text": "Посмотреть урок" }
```

Возвращает статус код 201 и список задач с добавленной задачей в формате JSON, например

```json
{
  "todos": [
    { "id": 1, "text": "Сделать чаю" },
    { "id": 2, "text": "Выпить чаю" },
    { "id": 3, "text": "Отдохнуть" },
    { "id": 4, "text": "Посмотреть урок" }
  ]
}
```

Возвращает статус код 400, если полученные данные не в формате JSON

## Удалить задачу по id из списка

адрес: https://wedev-api.sky.pro/api/v2/todos/:id

метод: DELETE

Возвращает статус код 200 и список задач с удаленной задачей в формате JSON, например

```json
{
  "todos": [
    { "id": 2, "text": "Выпить чаю" },
    { "id": 3, "text": "Отдохнуть" },
    { "id": 4, "text": "Посмотреть урок" }
  ]
}
```

Возвращает статус код 404, если задачи с указанным ID не существует
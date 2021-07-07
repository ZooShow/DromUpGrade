## Frontend подробности

Не забываем делать git pull перед началом работы!!!

# Сборка проекта:

```bash
npm install
```

# Запуск проекта
```bash
npm run dev
```

# Краткая инфо про структуру проекта

* Components: тут мы описываем все компоненты. Создаем директорию, там js и scss файлы и пишем наш компонент.

* ComponentsService: тут мы описываем компоненты, которые отвечают за функциональные составляющие приложения. Там уже лежит пример c ссылкой.

* Layout: тут описываем компоненты, которые будут подложками для страниц с одинаковым оформлением и разным контентом. Например Header и Footer компоненты будут везде и мы создадим layout Page с этими компонентами.

* Pages: тут все страницы.

* Public: сюда все медиа которые будем юзать в проекте.

* Scripts: сюда кастомные хуки, какие-то функции упрощающие жизнь. Ну и демо данные будут там.

* styles: вообще все стили к компонентам пишем модульно и по БЭМ чтоб по полной sass отрабатывал. Но тут пишутся глобальные стили, переменные и тд.
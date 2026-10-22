# Project: SENSORITY

Одностраничный лендинг. В архиве есть исходники и уже собранная папка `dist/`.

Заявка с почтой пишется в `localStorage` того браузера, который открыл страницу. На сервер она не уходит.

## Открыть уже собранный сайт

Нужен только Node.js 20+. Зависимости ставить не надо.

```bash
node serve.mjs
```

Сервер слушает `0.0.0.0:8080`.

- На этом компьютере: http://localhost:8080
- С телефона или другого компьютера в той же Wi-Fi: `http://IP-ЭТОГО-КОМПЬЮТЕРА:8080`

IP:

- Windows: `ipconfig`, строка IPv4
- macOS: `ipconfig getifaddr en0`
- Linux: `hostname -I`

Если с другого устройства страница не открывается, разреши входящие на порт 8080 в брандмауэре.

Другой порт: `PORT=3000 node serve.mjs`

## Править и пересобрать

```bash
npm install
npm run dev
```

Правки смотри на http://localhost:8080. Сборка заново:

```bash
npm run build
node serve.mjs
```

## GitHub

Папку `node_modules` не коммить. `dist/` можно оставить, чтобы сайт открывался командой `node serve.mjs` сразу после клонирования.

```bash
git init
git add .
git commit -m "Project: SENSORITY landing"
git branch -M main
git remote add origin https://github.com/USER/project-sensority.git
git push -u origin main
```

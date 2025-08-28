# Используем лёгкий образ
FROM node:22-alpine

# Рабочая директория
WORKDIR /app

# Копируем только манифесты и ставим прод-зависимости
COPY package*.json ./
RUN npm ci --omit=dev

# Копируем остальной код
COPY . .

# Порт (Railway задаст PORT)
EXPOSE 3000

# Стартуем сервер
CMD ["node", "server.js"]

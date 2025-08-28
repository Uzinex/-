# Dockerfile
FROM node:22-alpine

WORKDIR 

# Копируем только манифесты
COPY package*.json ./

# Ставим зависимости без dev
RUN npm install --omit=dev

# Копируем остальной код
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]

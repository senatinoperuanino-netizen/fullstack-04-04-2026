#1. iniciamos una imagen base con node instalada
FROM node:24
#2. Creamos carpeta dentro del conternedor
WORKDIR /app
#3. Copiamos todas las dependencias (package.json y package-lock.json) a la carpeta del contenedor
COPY package*.json ./
#4. Instalar dependencias
RUN npm install
#5. Copiamos el resto de los archivos del proyecto al contenedor
COPY . .
#6. Exponemos el puerto (tu Backend se ejecuta en el puerto 3000)
EXPOSE 3000
#7. Comando para iniciar el servidor
CMD ["npm", "run", "dev"]
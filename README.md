# TP Final - Node.js + Express + MongoDB

## Estado del Proyecto
🚧 **En curso** 🚧
Este proyecto corresponde al trabajo final de la materia, desarrollado con **Node.js**, **Express** y **MongoDB (Mongoose)**.
Actualmente se encuentra en fase de desarrollo, con endpoints básicos para usuarios, chats y mensajes.

---

## 📦 Pasos de instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/TP_Final.git
   cd TP_Final

2. Instalar dependencias:
    ```bash
    npm install

3. Configurar variables de entorno en un archivo .env en la raíz:
    ```bash
    MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/chatdb
    PORT=4000

4. Ejecutar el servidor en modo desarrollo:
    ```bash
    npm run dev

El servidor se levantará en http://localhost:4000

---

## 🌐 Endpoints disponibles

# Usuarios
- POST /users → Crear usuario
- GET /users → Listar usuarios

# Chats
- POST /chats → Crear chat entre usuarios
- GET /chats → Listar chats existentes

# Mensajes
- POST /messages → Enviar mensaje a un chat
- GET /messages/:chatId → Obtener historial de mensajes de un chat

---

## 📋 Ejemplos de requests y responses

# Crear usuario
Request
```bash
POST /users
Content-Type: application/json

{
  "username": "fede",
  "email": "fede@example.com"
}
```

Response
```bash
{
  "success": true,
  "data": {
    "_id": "67a0c1f2e4b0a5d123456789",
    "username": "fede",
    "email": "fede@example.com",
    "__v": 0
  }
}
```

---

# Crear chat
Request
```bash
POST /chats
Content-Type: application/json

{
  "users": ["67a0c1f2e4b0a5d123456789", "67a0c1f2e4b0a5d987654321"],
  "name": "Chat de prueba"
}
```

Response
```bash
{
  "success": true,
  "data": {
    "_id": "67a0c1f2e4b0a5d111111111",
    "users": [
      "67a0c1f2e4b0a5d123456789",
      "67a0c1f2e4b0a5d987654321"
    ],
    "name": "Chat de prueba",
    "__v": 0
  }
}
```

---

# Enviar mensaje
Request
```bash
POST /messages
Content-Type: application/json

{
  "chatId": "67a0c1f2e4b0a5d111111111",
  "userId": "67a0c1f2e4b0a5d123456789",
  "content": "Hola, este es un mensaje de prueba"
}
```

Response
```bash
{
  "success": true,
  "data": {
    "_id": "67a0c1f2e4b0a5d222222222",
    "chatId": "67a0c1f2e4b0a5d111111111",
    "userId": "67a0c1f2e4b0a5d123456789",
    "content": "Hola, este es un mensaje de prueba",
    "createdAt": "2026-02-07T23:20:00.000Z",
    "__v": 0
  }
}
```

---

# Historial de mensajes
Request
```bash
GET /messages/67a0c1f2e4b0a5d111111111
```

Response
```bash
{
  "success": true,
  "data": [
    {
      "_id": "67a0c1f2e4b0a5d222222222",
      "chatId": "67a0c1f2e4b0a5d111111111",
      "userId": {
        "_id": "67a0c1f2e4b0a5d123456789",
        "username": "fede"
      },
      "content": "Hola, este es un mensaje de prueba",
      "createdAt": "2026-02-07T23:20:00.000Z"
    }
  ]
}
```

---

## 🔗 Conexión con el frontend
El backend expone una API REST que puede ser consumida desde cualquier frontend (React, Angular, Vue, etc.).
Ejemplo en React usando fetch:
```bash
// Obtener usuarios
const getUsers = async () => {
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();
  console.log(data);
};

// Crear mensaje
const sendMessage = async (chatId, userId, content) => {
  const res = await fetch("http://localhost:4000/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId, userId, content })
  });
  const data = await res.json();
  console.log(data);
};
```
De esta forma, el frontend puede interactuar con la API para mostrar usuarios, chats y mensajes en tiempo real.

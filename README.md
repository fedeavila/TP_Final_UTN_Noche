# TP Final - Node.js + Express + MongoDB

## Estado del Proyecto
✅ **Finalizado** ✅

Este proyecto corresponde al trabajo final de la materia, desarrollado con **Node.js**, **Express** y **MongoDB (Mongoose)**.  
Incluye endpoints para **usuarios, chats y mensajes**, con autenticación mediante **JWT** y contraseñas encriptadas con **bcrypt**.

---

## 📦 Pasos de instalación y ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/fedeavila/TP_Final.git
   cd TP_Final
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** en un archivo `.env` en la raíz:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/chatdb
   PORT=4000
   JWT_SECRET=DavidGuetta123
   ```

4. **Ejecutar el servidor en modo desarrollo**:
   ```bash
   npm run dev
   ```
   El servidor se levantará en [http://localhost:4000](http://localhost:4000).

---

## 🌐 Endpoints disponibles

### Autenticación
- `POST /auth/register` → Registrar usuario
- `POST /auth/login` → Login y obtención de token JWT

### Usuarios
- `GET /users` → Listar usuarios (requiere token)
- `DELETE /users/:id` → Eliminar usuario (requiere token)

### Chats
- `POST /chats` → Crear chat entre usuarios (requiere token)
- `GET /chats` → Listar chats existentes (requiere token)

### Mensajes
- `POST /messages` → Enviar mensaje a un chat (requiere token)
- `GET /messages/:chatId` → Obtener historial de mensajes de un chat (requiere token)

---

## 📋 Ejemplos de requests y responses

### Registro de usuario
<img width="3000" height="1781" alt="image" src="https://github.com/user-attachments/assets/fd2136ae-90f4-4f89-9eca-afd705d2dfd8" />

---

### Login de usuario
<img width="3000" height="1781" alt="image" src="https://github.com/user-attachments/assets/8d2ec893-5af8-493e-b277-eedec0801e45" />

---

### Acceso a rutas protegidas
<img width="3000" height="1781" alt="image" src="https://github.com/user-attachments/assets/5c0fd324-3306-40f3-bfc5-d4c0492b0dba" />

---

## 🔗 Conexión con el frontend
El backend expone una API REST que puede ser consumida desde cualquier frontend (React, Angular, Vue, etc.).  
Ejemplo en React usando `fetch`:

```js
const getUsers = async () => {
  const res = await fetch("http://localhost:4000/users", {
    headers: { Authorization: "Bearer <token>" }
  });
  const data = await res.json();
  console.log(data);
};
```

---

## 📂 Colección Postman
Se incluye una colección Postman (`TP_Final.postman_collection.json`) con todos los endpoints listos para importar y probar:
- Registro
- Login
- CRUD de usuarios
- CRUD de chats
- CRUD de mensajes


¡Saludos!

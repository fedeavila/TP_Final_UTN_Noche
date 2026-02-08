import dotenv from "dotenv";
import express from "express";
import connectDB from "./db.js";

import chatsRoutes from "./routes/chats.routes.js";
import messagesRoutes from "./routes/messages.routes.js";
import usersRoutes from "./routes/users.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/chats", chatsRoutes);
app.use("/messages", messagesRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ success: false, message: err.message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`SERVIDOR CORRIENDO EN PUERTO: ${PORT}`));

import { Router } from "express";
import Chat from "../models/chat.model.js";

const router = Router();

// CREAR CHAT
router.post("/", async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.json({ success: true, data: chat });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// LISTAR CHATS
router.get("/", async (req, res) => {
    const chats = await Chat.find().populate("users");
    res.json({ success: true, data: chats });
});


export default router;

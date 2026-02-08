import { Router } from "express";
import Message from "../models/message.model.js";

const router = Router();

// ENVIAR MENSAJE
router.post("/", async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.json({ success: true, data: message });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// HISTORIAL DE MENSAJES POR CHAT
router.get("/:chatId", async (req, res) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId })
            .populate("userId", "username")
            .sort({ createdAt: 1 });
        res.json({ success: true, data: messages });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

export default router;

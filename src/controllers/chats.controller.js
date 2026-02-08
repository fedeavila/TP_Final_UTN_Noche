import Chat from '../models/chat.model.js';

// CREAR NUEVO CHAT
export const createChat = async (req, res) => {
    try {
        const chat = await Chat.create(req.body);
        res.status(201).json({ success: true, data: chat, message: 'CHAT CREADO!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// LISTAR TODOS LOS CHATS
export const getChats = async (req, res) => {
    try {
        const chats = await Chat.find().populate('users');
        res.json({ success: true, data: chats });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

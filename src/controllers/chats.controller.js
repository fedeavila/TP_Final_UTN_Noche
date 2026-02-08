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

// ACTUALIZAR CHAT
export const updateChat = async (req, res) => {
    try {
        const chat = await Chat.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!chat) {
            return res.status(404).json({ success: false, message: 'CHAT NO ENCONTRADO!' });
        }
        res.status(200).json({ success: true, data: chat, message: 'CHAT ACTUALIZADO!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

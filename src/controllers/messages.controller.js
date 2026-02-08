import Message from '../models/message.model.js';

// ENVIAR MENSAJE
export const sendMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.status(201).json({ success: true, data: message, message: 'MENSAJE ENVIADO!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// HISTORIAL DE MENSAJES POR CHAT
export const getMessagesByChat = async (req, res) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId })
            .populate('userId', 'username')
            .sort({ createdAt: 1 });
        res.json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ACTUALIZAR MENSAJE
export const updateMessage = async (req, res) => {
    try {
        const message = await Message.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!message) {
            return res.status(404).json({ success: false, message: 'MENSAJE NO ENCONTRADO!' });
        }
        res.status(200).json({ success: true, data: message, message: 'MENSAJE ACTUALIZADO!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

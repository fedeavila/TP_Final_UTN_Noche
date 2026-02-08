import User from '../models/user.model.js';

// CREAR NUEVO USUARIO
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user, message: 'USUARIO CREADO!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// LISTAR TODOS LOS USUARIOS
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ELIMINAR USUARIO
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'USUARIO ELIMINADO!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

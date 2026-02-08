import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// REGISTRO DE USUARIO
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // ENCRIPTAR PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, password: hashedPassword });

        res.status(201).json({ success: true, data: user, message: 'USUARIO REGISTRADO!' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// LOGIN DE USUARIO
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ success: false, message: 'USUARIO NO ENCONTRADO!' });
        }

        // COMPARAR PASSWORD
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'CREDENCIALES INVÁLIDAS!' });
        }

        // GENERAR TOKEN JWT
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ success: true, token, message: 'LOGIN EXITOSO!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

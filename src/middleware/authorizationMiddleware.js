import jwt from 'jsonwebtoken';

export function authorizationMiddleware(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ success: false, message: 'TOKEN NO PROPORCIONADO!' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ success: false, message: 'FORMATO DE TOKEN INVÁLIDO!' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: 'TOKEN INVÁLIDO O EXPIRADO!' });
    }
}

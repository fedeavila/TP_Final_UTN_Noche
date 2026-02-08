import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

// CREAR USUARIO
router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// LISTAR USUARIOS
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({ success: true, data: users });
});

// ELIMINAR USUARIO
router.delete("/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "USUARIO ELIMINADO!" });
});

export default router;

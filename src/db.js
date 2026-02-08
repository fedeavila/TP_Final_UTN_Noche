import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONECTADO!");
    } catch (error) {
        console.error("ERROR DE CONEXIÓN: ", error.message);
        process.exit(1);
    }
};

export default connectDB;

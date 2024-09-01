import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT , async() => {
    await DBconnect();
    console.log(`Server listening at PORT ${PORT}`);
})
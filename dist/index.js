"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// import authRoutes from "./routes/authRoutes";
// import { connectDB } from "./config/db";
// import { errorHandler } from "./middlewares/errorMiddleware";
dotenv_1.default.config();
const app = (0, express_1.default)();
//connectDB();
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//app.use("/api/todo", authRoutes);
//app.use(errorHandler);
exports.default = app;

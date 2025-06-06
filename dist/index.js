"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const db_1 = require("./config/db");
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/todo", todoRoutes_1.default);
app.use(errorMiddleware_1.errorHandler);
exports.default = app;

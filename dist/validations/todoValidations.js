"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoSchema = exports.createTodoSchema = void 0;
const zod_1 = require("zod");
exports.createTodoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
});
exports.updateTodoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).optional(),
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodoById = exports.getAllTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const createTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!todo.title) {
            return {
                success: false,
                message: "Title is required",
            };
        }
        const newTodo = yield todo_1.Todo.create(todo);
        return {
            success: true,
            message: "Todo created successfully",
            data: newTodo,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error creating todo",
        };
    }
});
exports.createTodo = createTodo;
const getAllTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.Todo.find();
        return {
            success: true,
            message: "Todos fetched successfully",
            data: todos,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error fetching todos",
        };
    }
});
exports.getAllTodos = getAllTodos;
const getTodoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todo_1.Todo.findById(id);
        if (!todo) {
            return {
                success: false,
                message: "Todo not found",
            };
        }
        return {
            success: true,
            message: "Todo fetched successfully",
            data: todo,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error fetching todo",
        };
    }
});
exports.getTodoById = getTodoById;
const updateTodo = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTodo = yield todo_1.Todo.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
        if (!updatedTodo) {
            return {
                success: false,
                message: "Todo not found",
            };
        }
        return {
            success: true,
            message: "Todo updated successfully",
            data: updatedTodo,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error updating todo",
        };
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield todo_1.Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return {
                success: false,
                message: "Todo not found",
            };
        }
        return {
            success: true,
            message: "Todo deleted successfully",
            data: deletedTodo,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error deleting todo",
        };
    }
});
exports.deleteTodo = deleteTodo;

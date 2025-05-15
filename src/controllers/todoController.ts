import { Request, Response } from "express";
import * as todoService from "../services/todoService";

export const create = async (req: Request, res: Response) => {
  const { title } = req.body;
  const result = await todoService.createTodo({ title });
  if (result.success) {
    res.status(201).json({ message: result.message, data: result.data });
  } else {
    res.status(400).json({ message: result.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  const result = await todoService.getAllTodos();
  if (result.success) {
    res.status(200).json({ message: result.message, data: result.data });
  } else {
    res.status(400).json({ message: result.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  const result = await todoService.getTodoById(req.params.id);
  if (result.success) {
    res.status(200).json({ message: result.message, data: result.data });
  } else {
    res.status(404).json({ message: result.message });
  }
};

export const update = async (req: Request, res: Response) => {
  const { title } = req.body;
  const result = await todoService.updateTodo(req.params.id, title);
  if (result.success) {
    res.status(200).json({ message: result.message, data: result.data });
  } else {
    res.status(404).json({ message: result.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  const result = await todoService.deleteTodo(req.params.id);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
};

import { Todo } from "../models/todo";

interface ITodo {
  title: string;
}

interface ServiceResult {
  success: boolean;
  message: string;
  data?: any;
}

export const createTodo = async (todo: ITodo): Promise<ServiceResult> => {
  try {
    if (!todo.title) {
      return {
        success: false,
        message: "Title is required",
      };
    }

    const newTodo = await Todo.create(todo);
    return {
      success: true,
      message: "Todo created successfully",
      data: newTodo,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error creating todo",
    };
  }
};

export const getAllTodos = async (): Promise<ServiceResult> => {
  try {
    const todos = await Todo.find();
    return {
      success: true,
      message: "Todos fetched successfully",
      data: todos,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error fetching todos",
    };
  }
};

export const getTodoById = async (id: string): Promise<ServiceResult> => {
  try {
    const todo = await Todo.findById(id);
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
  } catch (error) {
    return {
      success: false,
      message: "Error fetching todo",
    };
  }
};

export const updateTodo = async (
  id: string,
  data: ITodo
): Promise<ServiceResult> => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, data, {
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
  } catch (error) {
    return {
      success: false,
      message: "Error updating todo",
    };
  }
};

export const deleteTodo = async (id: string): Promise<ServiceResult> => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
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
  } catch (error) {
    return {
      success: false,
      message: "Error deleting todo",
    };
  }
};

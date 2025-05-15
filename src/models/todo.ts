import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
}

const todoSchema = new Schema<ITodo>(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export const Todo = mongoose.model<ITodo>("Todo", todoSchema);

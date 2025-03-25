import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

interface TodoItemProps {
  todo: { id: number; title: string };
  removeTodo: (id: number) => void;
}

export default function TodoItem({ todo, removeTodo }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center mb-2 border border-gray-300 rounded-lg px-2 py-1">
      <span>{todo.title}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="hover:bg-gray-100 text-white rounded"
      >
        <AiOutlineDelete
          size={38}
          className="p-2 text-black hover:text-red-600"
        />
      </button>
    </li>
  );
}

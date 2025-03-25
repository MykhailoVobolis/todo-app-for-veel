import React from 'react';

interface TodoItemProps {
  todo: { id: number; title: string };
  removeTodo: (id: number) => void;
}

export default function TodoItem({ todo, removeTodo }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center mb-2">
      <span>{todo.title}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="ml-2 px-2 py-1 bg-red-500 hover:bg-red-700 text-white rounded"
      >
        Delete
      </button>
    </li>
  );
}

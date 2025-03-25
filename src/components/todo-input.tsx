'use client';

import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (title: string) => void;
}

export default function TodoInput({ addTodo }: TodoInputProps) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className=" px-2 py-1 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
      />
      <button
        onClick={handleAddTodo}
        className="ml-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg "
      >
        Add Todo
      </button>
    </div>
  );
}

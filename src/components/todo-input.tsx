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
        className="border p-2 w-96 rounded"
      />
      <button
        onClick={handleAddTodo}
        className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded "
      >
        Add Todo
      </button>
    </div>
  );
}

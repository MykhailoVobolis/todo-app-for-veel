import { Todo } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Функція для отримання тасок
export const getTodos = async () => {
  const response = await fetch(`${API_BASE_URL}/todos?_limit=10`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
};

// Функція для створення нової таски
export async function createTodo(title: string): Promise<Todo> {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      completed: false,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to create todo');
  }

  return response.json();
}

// Функція для видалення таски
export const deleteTodo = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
  return id;
};

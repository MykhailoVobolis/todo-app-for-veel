'use client';

import TodoInput from '@/components/todo-input';
import TodoList from '@/components/todo-list';
import GlobalError from './global-error';

import { useTodos } from '@/hooks/use-todos';

export default function Home() {
  const { todos, isLoading, error, addTodo, removeTodo } = useTodos();

  return (
    <main className="min-h-screen flex flex-col mx-auto pt-10 w-[620px]">
      <TodoInput addTodo={addTodo} />
      {error instanceof Error ? (
        <GlobalError message={error.message} />
      ) : (
        <TodoList todos={todos} removeTodo={removeTodo} isLoading={isLoading} />
      )}
    </main>
  );
}

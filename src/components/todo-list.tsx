'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodo, deleteTodo, getTodos } from '../lib/api';
import { Todo } from '@/lib/types';

import TodoInput from './todo-input';
import TodoItem from './todo-item';
import GlobalError from '@/app/global-error';
import Loader from '@/app/loader';

export default function TodoList() {
  const queryClient = useQueryClient();

  // Запит для отримання todos
  const { data, isLoading, error } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  // Мутація для створення таски з оптимістичним оновленням кешу
  const { mutate: addTodo } = useMutation<
    Todo,
    Error,
    string,
    { previousTodos: Todo[] | undefined }
  >({
    mutationFn: createTodo,
    onMutate: async (title) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Оптимістичне оновлення: додаємо нову таску до кешу
      queryClient.setQueryData<Todo[]>(['todos'], (oldData = []) => [
        ...oldData,
        { id: Date.now(), title, completed: false }, // Тимчасова таска, поки не отримаємо результат з сервера
      ]);

      return { previousTodos };
    },
    onSuccess: (newTodoData) => {
      queryClient.setQueryData<Todo[]>(['todos'], (oldData = []) =>
        oldData.map((todo) =>
          todo.id === newTodoData.id ? newTodoData : todo,
        ),
      );
    },
    onError: (error, title, context) => {
      queryClient.setQueryData<Todo[]>(['todos'], context?.previousTodos);
    },
  });

  // Мутація для видалення таски з оптимістичним оновленням кешу
  const { mutate: removeTodo } = useMutation<
    number,
    Error,
    number,
    { previousTodos: Todo[] | undefined }
  >({
    mutationFn: deleteTodo,

    onMutate: async (id) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Оптимістичне оновлення: видаляємо таску до кешу
      queryClient.setQueryData<Todo[]>(['todos'], (oldData) =>
        oldData?.filter((todo) => todo.id !== id),
      );
      return { previousTodos };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData<Todo[]>(['todos'], context?.previousTodos);
    },
  });

  return (
    <>
      {error instanceof Error ? (
        <GlobalError message={error.message} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto p-4 ">
          <TodoInput addTodo={addTodo} />
          <h1 className="text-3xl font-bold mb-4 pt-8">Todo List</h1>
          <ul className="mt-4">
            {data?.map((todo: { id: number; title: string }) => (
              <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

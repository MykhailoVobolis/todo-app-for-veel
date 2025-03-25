import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTodo, deleteTodo, getTodos } from '@/lib/api';
import { Todo } from '@/lib/types';

export function useTodos() {
  const queryClient = useQueryClient();

  // Отримання тасок
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  // Додавання таски (з оптимістичним оновленням кешу)
  const { mutate: addTodo } = useMutation<
    Todo,
    Error,
    string,
    { previousTodos: Todo[] | undefined }
  >({
    mutationFn: createTodo,
    onMutate: async (title) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);
      queryClient.setQueryData<Todo[]>(['todos'], (oldData = []) => [
        ...oldData,
        { id: Date.now(), title, completed: false }, // Тимчасова таска
      ]);
      return { previousTodos };
    },
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(['todos'], (oldData = []) =>
        oldData.map((todo) => (todo.id === newTodo.id ? newTodo : todo)),
      );
    },
    onError: (_error, _title, context) => {
      queryClient.setQueryData<Todo[]>(['todos'], context?.previousTodos);
    },
  });

  // Видалення таски (з оптимістичним оновленням кешу)
  const { mutate: removeTodo } = useMutation<
    number,
    Error,
    number,
    { previousTodos: Todo[] | undefined }
  >({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);
      queryClient.setQueryData<Todo[]>(['todos'], (oldData) =>
        oldData?.filter((todo) => todo.id !== id),
      );
      return { previousTodos };
    },
    onError: (_error, _id, context) => {
      queryClient.setQueryData<Todo[]>(['todos'], context?.previousTodos);
    },
  });

  return { todos, isLoading, error, addTodo, removeTodo };
}

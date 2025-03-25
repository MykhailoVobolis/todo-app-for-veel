import Loader from '@/app/loader';
import TodoItem from './todo-item';
import { Todo } from '@/lib/types';

interface TodoListProps {
  todos: Todo[] | undefined;
  removeTodo: (id: number) => void;
  isLoading: boolean;
}

export default function TodoList({
  todos,
  removeTodo,
  isLoading,
}: TodoListProps) {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 pt-8">Todo List</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {todos?.map((todo: { id: number; title: string }) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
        </ul>
      )}
    </div>
  );
}

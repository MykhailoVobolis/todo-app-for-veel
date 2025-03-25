import TodoList from '@/components/todo-list';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <TodoList />
    </main>
  );
}

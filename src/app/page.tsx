import TodoApp from "@/components/todo-app";

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Todo List App</h1>
      <TodoApp />
    </main>
  );
}

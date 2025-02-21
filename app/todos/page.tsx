import prisma from "@/lib/prisma";

export default async function Todos() {
  const todoList = await prisma.todo.findMany({
    include: {
      author: true,
    },
  });
  console.log("todoList", todoList);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Todos
      </h1>
      <ul className="font-[family-name:var(--font-geist-sans)] max-w-2xl space-y-4">
        <li>My first post</li>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span className="font-semibold">{todo.title}</span>
            <span className="text-sm text-gray-600 ml-2">
              by {todo.author.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

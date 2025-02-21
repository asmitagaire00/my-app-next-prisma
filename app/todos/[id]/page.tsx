import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function Todo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("id", id);
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      author: true,
    },
  });

  console.log("todo is:", todo);

  if (!todo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <article className="max-w-2xl space-y-4 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold mb-8 text-[#333333]">
          My first post
        </h1>
        <p className="text-gray-600 text-center">{todo.author.name}</p>
        <div className="prose prose-gray mt-8">{todo.content}</div>
      </article>
    </div>
  );
}

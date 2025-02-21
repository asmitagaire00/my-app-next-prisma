import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  console.log("users", users);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
          Superblog
        </h1>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {users.length > 0 &&
            users.map((user) => {
              return (
                <li className="mb-2" key={user.email}>
                  {user.name}
                </li>
              );
            })}
        </ol>
      </main>
    </div>
  );
}

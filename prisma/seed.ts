import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    todos: {
      create: [
        {
          title: "Title 1 Alice",
          content: "content content content",
          published: false,
        },
        {
          title: "Title 2 Alice",
          content: "another",
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
    todos: {
      create: [
        {
          title: "Title 1 Bob",
          content: "content goes here",
          published: false,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();

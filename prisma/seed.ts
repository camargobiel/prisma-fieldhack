import { PrismaClient } from "@prisma/client";

const main = async () => {
  const prisma = new PrismaClient;

  // Criando 3 usuários
  await prisma.user.createMany({
    data: [
      {
        email: "joao@gmail.com", name: "João",
      },
      {
        email: "maria@hotmail.com", name: "Maria",
      },
      {
        email: "pedro@yahoo.com", name: "Pedro"
      }
    ]
  })

  // Criando 3 posts
  await prisma.post.createMany({
    data: [
      {
        id: 1,
        createdAt: "2022-10-20T10:00:00Z",
        updatedAt: "2022-10-20T10:00:00Z",
        title: "Primeiro post",
        content: "Este é o conteúdo do meu primeiro post.",
        published: true,
        authorId: 1,
        //istoNaoExiste: false
      },
      {
        id: 2,
        createdAt: "2022-10-22T15:30:00Z",
        updatedAt: "2022-10-22T15:30:00Z",
        title: "Segundo post",
        content: null,
        published: false,
        authorId: 2
      },
      {
        id: 3,
        createdAt: "2022-10-25T08:45:00Z",
        updatedAt: "2022-10-25T09:15:00Z",
        title: "Terceiro post",
        content: "Este é o conteúdo do meu terceiro post.",
        published: true,
        authorId: 3
      }
    ]
  })
}

main()

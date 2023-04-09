import { PrismaClient } from '@prisma/client';
import { GraphQLError } from 'graphql';
const prisma = new PrismaClient();


const resolvers = {
  Query: {
    getUsers: async () => {
      // TODO: Fazer
    },

    getUser: async (_: any, { id }: any) => { // TODO: Adicionar tipo de retorno : Promise<User>
      return prisma.user.findUniqueOrThrow({
        where: {
          id: id
        }
      }).catch((err: any) => {
        console.log(err);
        throw new GraphQLError('User not found');
      })
    }
  },

  Mutation: {
    createUser: async (_: any, { input }: any) => {
      return prisma.user.create({
        data: {
          name: input.name,
          email: input.email
        }
      })
    }
  }
}

export default resolvers;

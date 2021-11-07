import { PrismaClient } from "@prisma/client"
import { ApolloServer } from "apollo-server"
import { schema } from "./schema"

const prisma = new PrismaClient()

export const server = new ApolloServer({ context: () => ({ prisma }), schema })

import { makeSchema } from 'nexus'
import path, { join } from 'path'
import * as types from './graphql'


export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '.', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '.', 'schema.graphql'), // 3
  },
  contextType: {
    module: path.join(__dirname, 'context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
  },
})
import { extendType, objectType } from 'nexus'
import { ExternalModule as Ext } from 'nexus-prisma'

export const ExternalModule = objectType({
  name: Ext.$name,
  description: Ext.$description,
  definition(t) {
    t.field(Ext.id)
    t.field(Ext.name)
    t.field(Ext.url)
  }
})

export const ExternalsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('externals', {
      type: 'ExternalModule',
      resolve(_root, _args, ctx) {
        return ctx.prisma.externalModule.findMany()
      },
    })
  }
})
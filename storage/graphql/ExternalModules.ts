import {
  arg,
  extendType,
  inputObjectType,
  mutationType,
  nonNull,
  objectType,
  queryType,
} from "nexus"
import { ExternalModule as Ext } from "nexus-prisma"

export const ExternalModule = objectType({
  name: Ext.$name,
  description: Ext.$description,
  definition(t) {
    t.field(Ext.id)
    t.field(Ext.name)
    t.field(Ext.url)
  },
})

export const ExternalsQuery = queryType({
  definition(t) {
    t.nonNull.list.field("externals", {
      type: "ExternalModule",
      resolve(_root, _args, ctx) {
        return ctx.prisma.externalModule.findMany()
      },
    })
  },
})

export const Mutation = mutationType({
  definition(t) {
    t.nonNull.field("createOneExternal", {
      type: ExternalModule,
      args: {
        data: arg({ type: nonNull(ExternalModuleCreateInput) }),
      },
      resolve: (_root, args, ctx) => {
        return ctx.prisma.externalModule.create(args)
      },
    })
  },
})

const ExternalModuleCreateInput = inputObjectType({
  name: "ExternalModuleCreateInput",
  definition(t) {
    t.nonNull.string("name"), t.nonNull.string("url")
  },
})

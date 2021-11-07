import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
  await prisma.externalModule.create({
    data: {
      name: 'single-spa',
      url: 'https://cdn.jsdelivr.net/npm/single-spa/lib/system/single-spa.dev.js'
    }
  })
  
  const allExternalModules = await prisma.externalModule.findMany()

  console.log(allExternalModules)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
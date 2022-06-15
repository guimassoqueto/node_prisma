import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
/*
  await prisma.user.create({
    data: {
        name: 'Guilherme',
        email: 'gui.massoqueto@gmail.com',
        posts: {
            create: { title: 'Hello World' },
        },
        profile: {
            create: { bio: 'Guilherme\'s bio' }
        },
    },
  });
*/

  const all_users = await prisma.user.findMany({
    include: {
        posts: true,
        profile: true,
    }
  });

  return all_users

}

main()
  .then(users => {
    for ( const user of users ) {
        console.log(user.profile);
    }
  })
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
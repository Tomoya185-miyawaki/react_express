import prisma from '../repository/prisma'

async function main() {
  const miyawaki = await prisma.admins.create({
    data: {
      name: '宮脇智也',
      email: 'sample@example.com',
      password: 'password',
    },
  })
  console.log({ miyawaki })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import prisma from '../repository/prisma'
import bcrypt from 'bcrypt'

async function main() {
  const saltRounds = 10
  const sampleAdminUser = await prisma.admins.create({
    data: {
      name: 'admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('password', saltRounds),
    },
  })
  console.log(sampleAdminUser)
}

main().finally(async () => {
  await prisma.$disconnect()
})

import prisma from '@/repository/prisma'

const findAdminByEmail = (email: string) =>
  prisma.admins.findUnique({
    where: {
      email: email,
    },
  })

export { findAdminByEmail }

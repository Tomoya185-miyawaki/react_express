import prisma from './prisma'

const findAdminById = (id: number) =>
  prisma.admins.findUnique({
    where: {
      id: id,
    },
  })

export { findAdminById }

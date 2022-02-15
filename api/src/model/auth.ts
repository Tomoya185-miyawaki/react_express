import express from 'express'
import bcrypt from 'bcrypt'
import { loginData } from '@/interface/admin'
import { findAdminByEmail } from '@/repository/admin'

const validUser = async (req: express.Request) => {
  const formData = req.body as loginData
  const admin = await findAdminByEmail(formData.email)
  if (admin === null || admin.deleted_at !== null) {
    throw 'not user find'
  }
  const isCorrectPassword = await bcrypt.compare(formData.password, admin.password)
  if (!isCorrectPassword) {
    throw 'incorrect password'
  }
  return admin
}

export { validUser }

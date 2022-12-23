import { createDatabase } from '@onlydann/database'
import { Model } from '@onlydann/database/dist/db/Model'
import { userSchema } from './models/user'
import { User } from './models/user'

export async function database() {
  const db = await createDatabase('./db')

  const userModel = await db.createModel('users', userSchema)

  return {
    users: userModel,
  }
}

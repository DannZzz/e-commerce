import { Injectable } from '@nestjs/common'
import { database } from './create'
import bcrypt from 'bcrypt'
import { User } from './models/user'

@Injectable()
export class DatabaseService {
  db = database

  constructor() {}

  async validateUser(username: string, password: string): Promise<any> {
    const db = await this.db()

    const foundUser = await db.users.get({ username })
    if (foundUser) {
      if (await bcrypt.compare(password, foundUser.password)) {
        return foundUser
      }

      return null
    }
    return null
  }

  async signup(username: string, password: string): Promise<User | null> {
    const db = await this.db()

    const exist = await db.users.get({ username })
    if (exist) return null

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    return await db.users.create({ password: hash, username })
  }
}

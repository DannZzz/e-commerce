import { Schema, Value } from '@onlydann/database'

export interface User {
  _id: string
  username: string
  password: string
  avatar?: string
  uptadedAt?: Date[]
}

export const userSchema = new Schema<User>({
  username: new Value('string', { unique: true }),
  password: new Value('string'),
  avatar: new Value('string', { default: null }),
  uptadedAt: new Value('array', { default: [] }),
})

import { UserEntity } from 'src/auth/user.entity/user.entity'

export {}

declare global {
  namespace Express {
    export interface User extends UserEntity {}

    export interface Request {}
  }
}

import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { JwtModule, JwtService } from '@nestjs/jwt'
import { jwtConstants } from '../constants'
import { JwtStrategy } from './jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity/user.entity'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      ...jwtConstants,
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}

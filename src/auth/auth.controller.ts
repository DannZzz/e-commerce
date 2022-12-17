import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { Request as Req } from 'express'
import { UserEntity } from './user.entity/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Get('login')
  login(@Request() req: Req) {
    console.log(req.user)
    return this.authService.login(req.user)
  }

  @Post('signup')
  async signup(@Body() user: UserEntity): Promise<UserEntity> {
    return this.authService.signup(user)
  }
}

import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  @Get()
  @HttpCode(HttpStatus.BAD_REQUEST)
  any(@Query('lol') lol: string | string[]) {
    return lol
  }
}

import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/AuthGuard';
import { Jwt } from './auth/Jwt';

interface JwtPayload {
  sub: string;
  email: string;
}

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService, private jwt : Jwt) {}

  @Post()
  @UseGuards(AuthGuard)
  getHello(@Body() body): string {
    return "";
  }

  @Post('signin')
  @UseGuards(AuthGuard)
  getAccessToken(@Body() body): string {
    return this.jwt.getAccessToken(body);
  }

}

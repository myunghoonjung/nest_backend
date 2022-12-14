import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Jwt } from './auth/Jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Trix920823!@',
      database: 'sakila',
      entities: [],
      synchronize: true,
    }),
    JwtModule.register({})
  ],
  controllers: [AppController],
  providers: [AppService, Jwt],
})
export class AppModule {}

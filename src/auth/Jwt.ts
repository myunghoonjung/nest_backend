import { JwtService } from '@nestjs/jwt';
import { Body } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

interface JwtPayload {
    sub: string;
    email: string;
}
 
@Injectable()
export class Jwt {
    constructor(private jwtService: JwtService) {}
    getAccessToken(@Body() body): string {
        //여기서 DB 조회
        //@Param : body
        //@Result : true | false
        //@Desc : body 파라미터로 유저를 조회하여 올바른 유저인지.
        const user = true;
        if(!user){
            throw new Error('server error!');
        }
        //작은 서비스기때문에 토큰은 유저별로 one row로 insert or 업데이트하며 관리한다.

        const payload: JwtPayload = { sub: "Saltlux_BackOffice_Token", email: body.email };
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: '10m',
            secret: "temporary secret key",
        });
        return accessToken;
    }
}
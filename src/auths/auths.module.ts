import { Module } from '@nestjs/common';
import { AuthController } from './auths.controller.js';
import { AuthService } from './auths.service.js';

@Module({
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
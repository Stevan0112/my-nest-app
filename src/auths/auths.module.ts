import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller.js';

@Module({
  controllers: [AuthsController]
})
export class AuthsModule {}

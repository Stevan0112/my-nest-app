import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthsModule } from './auths/auths.module.js';

@Module({
  imports: [BooksModule, AuthsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
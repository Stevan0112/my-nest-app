import { Module } from '@nestjs/common';
import { Category } from './entities/category-entity.js';
import { CategoriesService } from './categories.service.js';
import { CategoriesController } from './categories.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [CategoriesService]
})
export class CategoriesModule {}

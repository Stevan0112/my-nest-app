import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auths/auths.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module.js';
import { CustomersService } from './customers/customers.service.js';
import { CustomersController } from './customers/customers.controller.js';
import { CustomersModule } from './customers/customers.module.js';
import { CustomerAddressesService } from './customer_addresses/customer_addresses.service.js';
import { ShipmentsModule } from './shipments/shipments.module.js';
import { ShipmentsController } from './shipments/shipments.controller.js';
import { ShipmentsService } from './shipments/shipments.service.js';
import { PaymentsModule } from './payments/payments.module.js';
import { PaymentsController } from './payments/payments.controller.js';
import { PaymentsService } from './payments/payments.service.js';
import { OrderItemsModule } from './order_items/order_items.module.js';
import { OrderItemsController } from './order_items/order_items.controller.js';
import { OrderItemsService } from './order_items/order_items.service.js';
import { OrdersModule } from './orders/orders.module.js';
import { OrdersController } from './orders/orders.controller.js';
import { OrdersService } from './orders/orders.service.js';
import { BookAuthorsModule } from './book_authors/book_authors.module.js';
import { BookAuthorsController } from './book_authors/book_authors.controller.js';
import { BookAuthorsService } from './book_authors/book_authors.service.js';
import { AuthorsModule } from './authors/authors.module.js';
import { AuthorsController } from './authors/authors.controller.js';
import { AuthorsService } from './authors/authors.service.js';
import { PublishersModule } from './publishers/publishers.module.js';
import { PublishersController } from './publishers/publishers.controller.js';
import { PublishersService } from './publishers/publishers.service.js';
import { CustomerAddressesModule } from './customer_addresses/customer_addresses.module.js';
import { CustomerAddressesController } from './customer_addresses/customer_addresses.controller.js';

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot({
      isGlobal:true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string().valid('development', 'staging', 'production').default('development'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(5432),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required()
      })
    }),
    AuthModule,

    // Konfigurasi untuk ORM
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),

        autoLoadEntities: true,
        synchronize: configService.get<string>('NODE_ENV') === 'development'
      })
    }),

    CategoriesModule,

    CustomersModule,

    CustomerAddressesModule,

    PublishersModule,

    AuthorsModule,

    BookAuthorsModule,

    OrdersModule,

    OrderItemsModule,

    PaymentsModule,

    ShipmentsModule
  ],
  controllers: [AppController, CustomersController, CustomerAddressesController, PublishersController, AuthorsController, BookAuthorsController, OrdersController, OrderItemsController, PaymentsController, ShipmentsController],
  providers: [AppService, CustomersService, CustomerAddressesService, PublishersService, AuthorsService, BookAuthorsService, OrdersService, OrderItemsService, PaymentsService, ShipmentsService],
})
export class AppModule {}
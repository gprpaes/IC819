import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import {TypeOrmModule} from '@nestjs/typeorm';
require('dotenv').config()

@Module({
  imports: [UserModule, PropertyModule, TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DB_CONNECT,
    synchronize: true,
    autoLoadEntities: true,
    ssl: {
      rejectUnauthorized: false,
      require: true,
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

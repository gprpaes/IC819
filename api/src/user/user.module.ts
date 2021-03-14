import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import Property from 'src/property/entities/property.entity';
import Permission from '../permissions/permissions'


@Module({
  imports: [TypeOrmModule.forFeature([User, Property, Permission])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

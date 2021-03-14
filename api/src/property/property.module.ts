import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import PropertyType from 'src/propertyType/propertyType';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([PropertyType])],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}

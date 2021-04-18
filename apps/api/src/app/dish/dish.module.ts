import { Module } from '@nestjs/common';
import { DishController } from './dish.controller';
import { DishService } from './dish.service';
import {MongooseModule} from "@nestjs/mongoose";
import {DishSchema} from "./dish.schema";

@Module({
  controllers: [DishController],
  providers: [DishService],
  imports: [ MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }]) ]
})
export class DishModule {}

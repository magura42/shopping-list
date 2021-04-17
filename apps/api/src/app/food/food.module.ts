import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import {MongooseModule} from "@nestjs/mongoose";
import {FoodController} from "./food.controller";
import {FoodSchema} from "./food.schema";

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  imports: [ MongooseModule.forFeature([{ name: 'Food', schema: FoodSchema }]) ]
})
export class FoodModule {}

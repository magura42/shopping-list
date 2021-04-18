import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import {MongooseModule} from "@nestjs/mongoose";
import {DishSchema} from "../dish/dish.schema";
import {MealSchema} from "./meal.schema";

@Module({
  controllers: [MealController],
  providers: [MealService],
  imports: [ MongooseModule.forFeature([{ name: 'Meal', schema: MealSchema }]) ]
})
export class MealModule {}

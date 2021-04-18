import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {ListModule} from "./list/list.module";
import {List} from "@shopping-list/shared";
import {ListSchema} from "./list/list.schema";
import { FoodModule } from './food/food.module';
import {CoreModule} from "./core/core.module";
import { IngredientModule } from './ingredient/ingredient.module';
import { DishModule } from './dish/dish.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [ListModule, FoodModule, CoreModule, IngredientModule, DishModule, MealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

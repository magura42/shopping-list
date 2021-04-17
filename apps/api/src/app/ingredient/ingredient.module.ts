import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import {MongooseModule} from "@nestjs/mongoose";
import {IngredientSchema} from "./ingredient.schema";

@Module({
  controllers: [IngredientController],
  providers: [IngredientService],
  imports: [ MongooseModule.forFeature([{ name: 'Ingredient', schema: IngredientSchema }]) ]
})
export class IngredientModule {}

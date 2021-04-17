import {IsDateString, IsNumber, IsOptional, IsString} from 'class-validator';
import {Ingredient} from "./ingredient.model";

export class Dish {

  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  ingredients: Ingredient[];

}

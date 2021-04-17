import { IsNumber, IsOptional, IsString} from 'class-validator';
import { Dish } from './dish.model';
import {Ingredient} from "./ingredient.model";

export class Meal {

  @IsNumber()
  @IsOptional()
  id?: number;

  dish: Dish;

  @IsString()
  weekday: string;

  @IsString()
  timeOfDay: string;
}

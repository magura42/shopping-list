import { IsNumber, IsOptional, IsString} from 'class-validator';
import {Food} from "./food.model";

export class Ingredient {

  @IsNumber()
  @IsOptional()
  id?: number;

  food: Food;

  @IsString()
  unit: string;

  @IsNumber()
  number: number;

}

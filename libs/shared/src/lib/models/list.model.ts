import {IsDateString, IsNumber, IsOptional, IsString} from 'class-validator';
import {Ingredient} from "./ingredient.model";

export class List {

  @IsNumber()
  @IsOptional()
  id?: number;

  ingredients: Ingredient[];

}

import {IsDateString, IsNumber, IsOptional, IsString} from 'class-validator';

export class List {

  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

  @IsDateString()
  date: string
}

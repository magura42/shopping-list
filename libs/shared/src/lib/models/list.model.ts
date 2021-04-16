import { IsNumber, IsOptional, IsString } from 'class-validator';

export class List {

  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;
}

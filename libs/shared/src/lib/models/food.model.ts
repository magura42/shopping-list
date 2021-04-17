import { IsNumber, IsOptional, IsString} from 'class-validator';

export class Food {

  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  name: string;

}

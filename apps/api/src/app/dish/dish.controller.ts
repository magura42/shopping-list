import {
  Body,
  Controller, Delete,
  Get,
  HttpCode, NotFoundException,
  Param,
  Post, Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {Dish} from "@shopping-list/shared";
import {DishService} from "./dish.service";

@Controller('dish')
export class DishController {

  constructor(private dishService: DishService) {
  }

  @Get()
  getDishes(): Promise<Dish[]> {
    return this.dishService.getDishes();
  }

  @Get(':id')
  getDishById(@Param('id') id: string): Promise<Dish> {
    return this.dishService.getDishById(+id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createDish(@Body() dish: Dish): Promise<Dish> {
    return this.dishService.createDish(dish);
  }

  @Put()
  @UsePipes(ValidationPipe)
  updateDish(@Body() dish: Dish): Promise<Dish> {
    return this.dishService.updateDish(dish);
  }

  @Delete(':id')
  async deleteDishById(@Param('id') id: string): Promise<void> {
    const deleted = await this.dishService.deleteDish(+id);
    if (!deleted) {
      throw new NotFoundException('Ingredient not found.');
    }
  }

}

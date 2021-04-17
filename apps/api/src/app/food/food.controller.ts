import {Body, Controller, Delete, Get, HttpCode,
  NotFoundException,
  Param, Post, Put, UsePipes, ValidationPipe} from '@nestjs/common';
import {Food} from "@shopping-list/shared";
import {FoodService} from "./food.service";

@Controller('food')
export class FoodController {

  constructor(private foodService: FoodService) {
  }

  @Get()
  getFoods(): Promise<Food[]> {
    return this.foodService.getFoods();
  }

  @Get(':id')
  getFoodById(@Param('id') id: string): Promise<Food> {
    return this.foodService.getFoodById(+id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createFood(@Body() food: Food): Promise<Food> {
    return this.foodService.createFood(food);
  }

  @Put()
  @UsePipes(ValidationPipe)
  updateFood(@Body() food: Food): Promise<Food> {
    return this.foodService.updateFood(food);
  }

  @Delete(':id')
  async deleteFoodById(@Param('id') id: string): Promise<void> {
    const deleted = await this.foodService.deleteFood(+id);
    if (!deleted) {
      throw new NotFoundException('Food not found.');
    }
  }
}

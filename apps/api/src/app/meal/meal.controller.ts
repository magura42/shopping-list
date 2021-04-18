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
import {Meal} from "@shopping-list/shared";
import {MealService} from "./meal.service";

@Controller('meal')
export class MealController {

  constructor(private mealService: MealService) {
  }

  @Get()
  getMeals(): Promise<Meal[]> {
    return this.mealService.getMeals();
  }

  @Get(':id')
  getMealById(@Param('id') id: string): Promise<Meal> {
    return this.mealService.getMealById(+id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createMeal(@Body() meal: Meal): Promise<Meal> {
    return this.mealService.createMeal(meal);
  }

  @Put()
  @UsePipes(ValidationPipe)
  updateMeal(@Body() meal: Meal): Promise<Meal> {
    return this.mealService.updateMeal(meal);
  }

  @Delete(':id')
  async deleteMealById(@Param('id') id: string): Promise<void> {
    const deleted = await this.mealService.deleteMeal(+id);
    if (!deleted) {
      throw new NotFoundException('Ingredient not found.');
    }
  }

}

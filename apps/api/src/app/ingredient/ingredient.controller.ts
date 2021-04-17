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
import {Ingredient} from "@shopping-list/shared";
import {IngredientService} from "./ingredient.service";

@Controller('ingredient')
export class IngredientController {


  constructor(private ingredientService: IngredientService) {
  }

  @Get()
  getIngredients(): Promise<Ingredient[]> {
    return this.ingredientService.getIngredients();
  }

  @Get(':id')
  getIngredientById(@Param('id') id: string): Promise<Ingredient> {
    return this.ingredientService.getIngredientById(+id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createIngredient(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.createIngredient(ingredient);
  }

  @Put()
  @UsePipes(ValidationPipe)
  updateIngredient(@Body() ingredient: Ingredient): Promise<Ingredient> {
    return this.ingredientService.updateIngredient(ingredient);
  }

  @Delete(':id')
  async deleteIngredientById(@Param('id') id: string): Promise<void> {
    const deleted = await this.ingredientService.deleteIngredient(+id);
    if (!deleted) {
      throw new NotFoundException('Ingredient not found.');
    }
  }
}

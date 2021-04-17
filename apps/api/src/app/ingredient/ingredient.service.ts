import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { Ingredient } from "@shopping-list/shared";
import {IngredientDocument} from "./ingredient.schema";

@Injectable()
export class IngredientService {


  constructor(@InjectModel('Ingredient') private ingredientModel: Model<IngredientDocument>) {
  }

  async getIngredients(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  async getIngredientById(id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientModel.findOne({id}).exec();
    if (ingredient) {
      return ingredient;
    }
    throw new NotFoundException();
  }

  async createIngredient(ingredient: Ingredient): Promise<Ingredient> {
    const newIngredient = new this.ingredientModel(ingredient);
    return newIngredient.save();
  }

  async updateIngredient(ingredient: Ingredient): Promise<Ingredient> {
    const result = await this.ingredientModel.updateOne({id: ingredient.id}, ingredient).exec();
    if (result.n === 1) {
      return ingredient;
    }
    throw new NotFoundException();
  }

  async deleteIngredient(id: number): Promise<boolean> {
    const deleted = await this.ingredientModel.deleteOne({ id }).exec();
    return deleted.n === 1;
  }
}

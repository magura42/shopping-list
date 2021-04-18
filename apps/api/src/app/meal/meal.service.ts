import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Meal} from "@shopping-list/shared";
import {MealDocument} from "./meal.schema";

@Injectable()
export class MealService {

  constructor(@InjectModel('Meal') private mealModel: Model<MealDocument>) {
  }

  async getMeals(): Promise<Meal[]> {
    return this.mealModel.find().exec();
  }

  async getMealById(id: number): Promise<Meal> {
    const meal = await this.mealModel.findOne({id}).exec();
    if (meal) {
      return meal;
    }
    throw new NotFoundException();
  }

  async createMeal(meal: Meal): Promise<Meal> {
    const newMeal = new this.mealModel(meal);
    return newMeal.save();
  }

  async updateMeal(meal: Meal): Promise<Meal> {
    const result = await this.mealModel.updateOne({id: meal.id}, meal).exec();
    if (result.n === 1) {
      return meal;
    }
    throw new NotFoundException();
  }

  async deleteMeal(id: number): Promise<boolean> {
    const deleted = await this.mealModel.deleteOne({ id }).exec();
    return deleted.n === 1;
  }
}



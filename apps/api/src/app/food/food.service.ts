import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Food } from '@shopping-list/shared';
import {Model} from "mongoose";
import { FoodDocument } from './food.schema';

@Injectable()
export class FoodService {

  constructor(@InjectModel('Food') private foodModel: Model<FoodDocument>) {
  }

  async getFoods(): Promise<Food[]> {
    return this.foodModel.find().exec();
  }

  async getFoodById(id: number): Promise<Food> {
    const food = await this.foodModel.findOne({id}).exec();
    if (food) {
      return food;
    }
    throw new NotFoundException();
  }

  async createFood(food: Food): Promise<Food> {
    const newFood = new this.foodModel(food);
    return newFood.save();
  }

  async updateFood(food: Food): Promise<Food> {
    const result = await this.foodModel.updateOne({id: food.id}, food).exec();
    if (result.n === 1) {
      return food;
    }
    throw new NotFoundException();
  }

  async deleteFood(id: number): Promise<boolean> {
    const deleted = await this.foodModel.deleteOne({ id }).exec();
    return deleted.n === 1;
  }
}

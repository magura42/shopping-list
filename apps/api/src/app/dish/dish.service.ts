import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Dish} from "@shopping-list/shared";
import {DishDocument} from "./dish.schema";

@Injectable()
export class DishService {

  constructor(@InjectModel('Dish') private dishModel: Model<DishDocument>) {
  }

  async getDishes(): Promise<Dish[]> {
    return this.dishModel.find().exec();
  }

  async getDishById(id: number): Promise<Dish> {
    const dish = await this.dishModel.findOne({id}).exec();
    if (dish) {
      return dish;
    }
    throw new NotFoundException();
  }

  async createDish(dish: Dish): Promise<Dish> {
    const newDish = new this.dishModel(dish);
    return newDish.save();
  }

  async updateDish(dish: Dish): Promise<Dish> {
    const result = await this.dishModel.updateOne({id: dish.id}, dish).exec();
    if (result.n === 1) {
      return dish;
    }
    throw new NotFoundException();
  }

  async deleteDish(id: number): Promise<boolean> {
    const deleted = await this.dishModel.deleteOne({ id }).exec();
    return deleted.n === 1;
  }
}

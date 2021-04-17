import { Injectable } from '@nestjs/common';
import { List } from '@shopping-list/shared';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ListDocument} from "./list.schema";

@Injectable()
export class ListService {

  constructor(@InjectModel('List') private flightModel: Model<ListDocument>) {
  }

  async getLists(): Promise<List[]> {
    return this.flightModel.find().exec();
  }
}

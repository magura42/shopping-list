import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Dish} from '@shopping-list/shared';

export const DishSchema = new mongoose.Schema({
  id: Number,
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient'
  }],
  name: String
});

DishSchema.pre('save', function() {
  const document = this as DishDocument;
  if (document.isNew) {
    return this.constructor['countDocuments']({}, (err, counter: number) => {
      document.id = counter;
      return document;
    });
  }
});

export type DishDocument = Dish & Document;

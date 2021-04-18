import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Meal} from '@shopping-list/shared';

export const MealSchema = new mongoose.Schema({
  id: Number,
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish'
  },
  weekday: String,
  timeOfDay: String
});

MealSchema.pre('save', function() {
  const document = this as MealDocument;
  if (document.isNew) {
    return this.constructor['countDocuments']({}, (err, counter: number) => {
      document.id = counter;
      return document;
    });
  }
});

export type MealDocument = Meal & Document;

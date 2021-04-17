import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Food } from '@shopping-list/shared';

export const FoodSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

FoodSchema.pre('save', function() {
  const document = this as FoodDocument;
  if (document.isNew) {
    return this.constructor['countDocuments']({}, (err, counter: number) => {
      document.id = counter;
      return document;
    });
  }
});

export type FoodDocument = Food & Document;

import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import {Food, Ingredient } from '@shopping-list/shared';

export const IngredientSchema = new mongoose.Schema({
  id: Number,
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  unit: String,
  number: Number
});

IngredientSchema.pre('save', function() {
  const document = this as IngredientDocument;
  if (document.isNew) {
    return this.constructor['countDocuments']({}, (err, counter: number) => {
      document.id = counter;
      return document;
    });
  }
});

export type IngredientDocument = Ingredient & Document;

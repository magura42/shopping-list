import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { List } from '@shopping-list/shared';

export const ListSchema = new mongoose.Schema({
  id: Number,
  name: String,
  date: String,
});

export type ListDocument = List & Document;

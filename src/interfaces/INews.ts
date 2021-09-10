import { Document } from 'mongoose';

export default interface INews extends Document {
  title: string;
  topic: string;
  description: string;
}

import INews from '@/interfaces/INews';
import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    topic: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: 'news' },
);

const News = mongoose.model<INews>('News', NewsSchema);

export default News;

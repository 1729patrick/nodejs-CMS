import mongoose from 'mongoose';
import Role from './Role';
import File from './File';
import User from './User';

const ContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    background: {
      type: mongoose.Schema.Types.ObjectId,
      ref: File,
      required: false,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Role,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Content', ContentSchema);

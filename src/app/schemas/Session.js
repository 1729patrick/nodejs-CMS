import mongoose from 'mongoose';
import Role from './Role';
import File from './File';

const SessionSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Session', SessionSchema);

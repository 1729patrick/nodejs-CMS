import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Role', RoleSchema);

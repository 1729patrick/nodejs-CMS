import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

FileSchema.virtual('url').get(function() {
  return `http://localhost:3333/files/${this.path}`;
});

FileSchema.set('toObject', { virtuals: true });
FileSchema.set('toJSON', { virtuals: true });

export default mongoose.model('File', FileSchema);

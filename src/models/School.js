import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    courses: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('School', SchoolSchema);

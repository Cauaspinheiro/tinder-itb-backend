import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    cursos: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('School', SchoolSchema);

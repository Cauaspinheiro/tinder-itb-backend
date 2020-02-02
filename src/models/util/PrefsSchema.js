import mongoose from 'mongoose';

const PrefsSchema = new mongoose.Schema(
  {
    escola: String,
    generos: [String],
    anos: [Number],
    cursos: [String],
  }, { _id: false },
);

export default PrefsSchema;

import mongoose from 'mongoose';

const PrefsSchema = new mongoose.Schema(
  {
    escola: String,
    genero: String,
    series: [Number],
    cursos: [String],
  },
);

export default PrefsSchema;

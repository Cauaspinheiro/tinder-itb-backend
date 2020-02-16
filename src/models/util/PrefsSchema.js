import mongoose, { Schema } from 'mongoose';

const PrefsSchema = new mongoose.Schema(
  {
    escola: { type: Schema.Types.ObjectId, ref: 'User' },
    generos: [String],
    anos: [Number],
    cursos: [String],
  }, { _id: false },
);

export default PrefsSchema;

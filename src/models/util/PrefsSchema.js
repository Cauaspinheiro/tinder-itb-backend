import mongoose, { Schema } from 'mongoose';

const PrefsSchema = new mongoose.Schema(
  {
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    gender: String,
    grade: Number,
    course: String,
  }, { _id: false },
);

export default PrefsSchema;

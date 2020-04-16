import mongoose, { Schema } from 'mongoose';

import PrefsSchema from './util/PrefsSchema';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contacts: {
      type: Map,
      required: true,
    },
    show_me: {
      type: Boolean,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    school_class: {
      type: String,
      required: true,
    },
    school_name: {
      type: String,
      required: true,
    },
    school: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'School',
    },
    course: {
      type: String,
      required: true,
    },
    prefs: PrefsSchema,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    matchs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    new_matchs: Number,
    password_hash: {
      type: String,
      required: true,
    },
    images: [String],
  },
  {
    timestamps: true,
  },
);

UserSchema.virtual('password');

export default mongoose.model('User', UserSchema);

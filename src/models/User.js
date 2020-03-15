import mongoose, { Schema } from 'mongoose';

import PrefsSchema from './util/PrefsSchema';

const UserSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    data_nascimento: {
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
    contatos: {
      type: Map,
      required: true,
    },
    show_me: {
      type: Boolean,
      required: true,
    },
    ano: {
      type: Number,
      required: true,
    },
    periodo: {
      type: String,
      required: true,
    },
    sala: {
      type: String,
      required: true,
    },
    nome_escola: {
      type: String,
      required: true,
    },
    escola: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'School',
    },
    curso: {
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
    deslikes: [
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
    novoMatchs: Number,
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

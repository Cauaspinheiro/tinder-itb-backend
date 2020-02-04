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
    detalhes: {
      type: Map,
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
    escola: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);

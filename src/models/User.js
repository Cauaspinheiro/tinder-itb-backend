import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    genero: {
      type: String,
      required: true
    },
    data_nascimento: {
      type: Date,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    email_itb: {
      type: String,
      required: true
    },
    detalhes: {
      type: Map,
      required: true
    },
    contatos: {
      type: Map,
      required: true
    },
    show_me: {
      type: Boolean,
      required: true
    },
    ano: {
      type: Number,
      required: true
    },
    periodo: {
      type: String,
      required: true
    },
    sala: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", UserSchema);

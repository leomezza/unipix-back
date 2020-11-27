import { Schema, model } from 'mongoose';

const bancoSchema = new Schema(
  {
    nome: {type: String, required: true, min: 5, max: 100},
    codigo: {type: String, required: true, min: 5, max: 100},
    imgBanco: {type: String, min: 5, max: 200}, 
    urlapp: {type: String,  min: 5, max: 200},
  },
  {
    timestamps: true,
  },
);

export default model('Banco', bancoSchema);

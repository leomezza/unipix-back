import { Schema, model } from 'mongoose';

import ApplicationError from '../errors/ApplicationError';

const pixSchema = new Schema(
  {
    key: { type: String, required: true, min: 5, max: 100 },
    pixType: { type: String, required: true, enum: ['CPF', 'CNPJ', 'EMail', 'Cell', 'Random'] },
    note: { type: String, max: 254 },
    bank: { type: Schema.Types.ObjectId, ref: 'Bank' },
    agency: { type: String, max: 10 },
    account: { type: String, max: 15 },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    ownertype: { type: String, required: true, enum: ['1', '2'] }, //1-Próprio / B-Terceiro
    name3P: { type: String, max: 100 },
  },
  {
    timestamps: true,
  },
);

pixSchema.statics.validateUpdateParams = (req, res, next) => {
  console.log(req.body);
  if (req.body.note || req.body.bank || req.body.agency || req.body.account || req.body.name3P) {
    return next();
  }

  throw new ApplicationError({ message: 'Erro no Update!!', status: 401 });
};

export default model('Pix', pixSchema);

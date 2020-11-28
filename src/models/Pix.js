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
    ownertype: { type: String, required: true, enum: ['1', '2'] },
    name3P: { type: String, max: 100 },
  },
  {
    timestamps: true,
  },
);

pixSchema.statics.validateUpdateParams = (req, res, next) => {
  if (req.body.title) {
    return next();
  }

  throw new ApplicationError({ message: 'asdassda', status: 401 });
};

export default model('Pix', pixSchema);

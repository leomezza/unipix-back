import { Schema, model } from 'mongoose';

const pixSchema = new Schema(
  {
    chave: {type: String, required: true, min: 5, max: 100},
    pixtype: {type: String, required: true, enum : ['CPF', 'CNPJ', 'EMail', 'Cel', 'Random']},
    obs: {type: String, max: 254}, 
    banco: { type: Schema.Types.ObjectId, ref: 'Banco'},
    agencia: { type: String,  max: 10 },
    conta: { type: String,  max: 15 },
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    ownertype: {type: String, required: true, enum : ['P','T']},
    nomeTerceiro: {type: String,  max: 100},
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

import { Schema, model } from 'mongoose';
import validator from 'cpf-cnpj-validator';
// import joi from 'joi';
const Joi = require('joi').extend(validator);

import ApplicationError from '../errors/ApplicationError';

const userSchema = new Schema(
  {
    type: { type: String, required: true, enum: ['A', 'B'] }, //A-Física / B-Jurídica
    fullName: { type: String, required: true, min: 5, max: 100 },
    password: { type: String, required: true, min: 5, max: 100 },
    email: { type: String, required: true, unique: true, min: 5, max: 100 },
    docNumber: { type: String, required: true, min: 11, max: 14 },
    tel: { type: String, required: true, min: 5, max: 16 },
    imgUrl: { type: String, min: 5, max: 200 },
  },
  {
    timestamps: true,
  },
);

class UserEntity {
  constructor() {
    this.User = model('User', userSchema);

    this.type = Joi.string().valid('A', 'B').required();
    this.fullName = Joi.string().min(5).max(100).required();
    this.password = Joi.string().min(5).max(100).required();
    this.email = Joi.string().email().min(5).max(100).required();
    // this.docNumber = req.body.type === 'A' ? Joi.document().cpf().required() : Joi.document().cnpj().required();
    this.tel = Joi.string().min(5).max(16).required();
    this.imgUrl = Joi.string().min(5).max(200);

    this.validateSignupParams = this.validateSignupParams.bind(this);
    this.validateLoginParams = this.validateLoginParams.bind(this);
  }

  validateSignupParams(req, res, next) {
    const signupUserSchema = Joi.object({
      type: this.type,
      fullName: this.fullName,
      password: this.password,
      email: this.email,
      docNumber: req.body.type === 'A' ? Joi.document().cpf().required() : Joi.document().cnpj().required(),
      tel: this.tel,
      imgUrl: this.imgUrl,
    }).options({ abortEarly: false });

    const joiValidation = signupUserSchema.validate(req.body);

    if (joiValidation.error) {
      const errorObject = joiValidation.error.details.reduce((acc, error) => {
        acc[error.context.label] = error.message;

        return acc;
      }, {});

      throw new ApplicationError({ message: errorObject, type: 'Auth-Signup-Validation-Error', status: 400 });
    }

    return next();
  }

  validateLoginParams(req, res, next) {
    const loginUserSchema = Joi.object({
      password: this.password,
      email: this.email,
    }).options({ abortEarly: false });

    const joiValidation = loginUserSchema.validate(req.body);

    if (joiValidation.error) {
      const errorObject = joiValidation.error.details.reduce((acc, error) => {
        acc[error.context.label] = error.message;

        return acc;
      }, {});

      throw new ApplicationError({ message: errorObject, type: 'Auth-Login-Validation-Error', status: 400 });
    }

    return next();
  }
}

export default new UserEntity();

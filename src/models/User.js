import { Schema, model } from 'mongoose';
import joi from 'joi';

const userSchema = new Schema(
  {
    tipo: {type: String, required: true, enum : ['F','J']},
    fullName: {type: String, required: true},
    password: {type: String, required: true}, 
    email: { type: String, min: 5, max: 100},
    docNumber: { type: String, required: true, max: 20 },
    tel: { type: String,  max: 15 },
    chavePix: [{type: Schema.Types.ObjectId, ref: 'Pix'}],
    imgUrl: { type: String, max: 200 },
  },
  {
    timestamps: true,
  },
);

class UserEntity {
  constructor() {
    this.User = model('User', userSchema);

    this.fullName = joi.string().min(5).max(100).required();
    this.email = joi.string().email().min(5).max(100).required();
    this.password = joi.string().min(5).max(100).required();
    this.imageURL = joi.string().min(5).max(200);

    this.validateSignupParams = this.validateSignupParams.bind(this);
    this.validateLoginParams = this.validateLoginParams.bind(this);
  }

  validateSignupParams(req, res, next) {
    const signupUserSchema = joi.object({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      imageURL: this.imageURL,
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
    const loginUserSchema = joi.object({
      email: this.email,
      password: this.password,
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

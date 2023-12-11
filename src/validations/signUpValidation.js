import Joi from 'joi';

export const signUpValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(8).required(),
  passwordConfirmation: Joi.string().valid(Joi.ref('password')).required().messages({ 'any.only': 'Password confirmation does not match' })
});

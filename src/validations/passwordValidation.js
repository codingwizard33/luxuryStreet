import Joi from 'joi';

export const passwordValidation = Joi.object({
  currentPassword: Joi.string(),
  password: Joi.string().min(8).required(),
  passwordConfirmation: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Password confirmation does not match' })
});

import joi from "joi";

import { regexConstant } from "../constants/regex.constant";

export class UserValidator {
  private static name = joi.string().min(3).max(20).trim();
  private static age = joi.number().min(10).max(45);
  private static email = joi
    .string()
    .lowercase()
    .regex(regexConstant.EMAIL)
    .trim();
  private static password = joi.string().regex(regexConstant.PASSWORD).trim();
  private static phone = joi.string().trim().regex(regexConstant.PHONE);

  public static create = joi.object({
    name: this.name.required(),
    age: this.age.required(),
    email: this.email.required(),
    password: this.password.required(),
    phone: this.phone,
  });
  public static update = joi.object({
    name: this.name,
    age: this.age,
    phone: this.phone,
  });
  public static signIn = joi.object({
    email: this.email.required(),
    password: this.password.required(),
  });
  public static changePassword = joi.object({
    oldPassword: this.password.required(),
    password: this.password.required(),
  });
}

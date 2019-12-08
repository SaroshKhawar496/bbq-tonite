const yup = require("yup");

const registerValidation = data => {
  const yupSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3)
      .max(25)
      .required(),
    lastName: yup
      .string()
      .min(3)
      .max(25)
      .required(),
    email: yup
      .string()
      .min(6)
      .max(40)
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .max(30)
      .required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords don't match!")
  });

  return yupSchema
    .validate(data)
    .then(res => {
      return { msg: "success" };
    })
    .catch(err => {
      return err;
    });
};

const loginValidation = data => {
  const yupSchema = yup.object().shape({
    email: yup
      .string()
      .min(6)
      .max(40)
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .max(30)
      .required()
  });

  return yupSchema
    .validate(data)
    .then(res => {
      return { msg: "success" };
    })
    .catch(err => {
      return err;
    });
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

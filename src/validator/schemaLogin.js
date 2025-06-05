import * as Yup from 'yup';

export const schemaLogin = Yup.object({
  username: Yup.string().required("Username is Required"),
  password: Yup.string().min(6,"Password need at least 6").required("Password is required")
});

export const schemaRegister = Yup.object({
  username: Yup.string().required("Username is Required"),
  password: Yup.string().min(6,"Password need at least 6").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});
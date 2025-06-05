import * as Yup from 'yup';

export const schemaLogin = Yup.object({
  email: Yup.string().required("Username is Required"),
  password: Yup.string().min(6,"Password need at least 6").required("Password is required")
});
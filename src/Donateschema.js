import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const donateSchema = yup.object().shape({
  username: yup.string().required("Required"),
  //   number: yup.string().required("Required"),
  amount: yup.number().positive().integer().required("Required"),
  number: yup
    .string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Not a Phone number"
    )
    .required("Required"),
});

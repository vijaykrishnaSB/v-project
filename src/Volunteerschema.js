import * as yup from "yup";

export const Volunteerschema = yup.object().shape({
  name: yup.string().required("Required name"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("Required"),
  number: yup.string().required("Required number"),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  pincode: yup.string().required("Required"),
});

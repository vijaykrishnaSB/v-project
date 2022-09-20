import * as yup from "yup";

export const reportSchema = yup.object().shape({
  name: yup.string().required("Required name"),
  date: yup.string().required("Required date"),
  emailid: yup
    .string()
    .email("please enter a valid email")
    .required("Required"),
  mobilenumber: yup.string().required("Required number"),
  address: yup.string().required("Required address"),
  district: yup.string().required("Required"),
  state: yup.string().required("Required"),
  pincode: yup.string().required("Required"),
  reasonofreporting: yup.string().required("This Feild is important"),
});

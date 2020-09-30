
import * as yup from "yup";


const schema = yup.object().shape({
    firstName: yup.string().max(60, "Too long").required("First Name Required"),
    lastName: yup.string().max(5, "Too long"),
    email: yup.string().email("Enter Valid Email").max(255).required("Email Address Required"),
    profilePic: yup.mixed()
      .required("You need to provide a file")
      .test("fileSize", "The file is too large", (value) => {
        return value && value[0].size <= 3000000;
      })
      .test("type", "We only support JPEG/PNG", (value) => {
        return value && (value[0].type === "image/jpeg" || value[0].type === "image/png" ) ;
      }),
  });


export default schema;
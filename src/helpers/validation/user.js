import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().max(60, "First name max lenght exceed").required("First Name Required"),
    lastName: yup.string().max(60, "Last name max lenght exceed"),
    contact: yup.string().max(12, "Contactg max lenght exceed"),
    address: yup.string().max(255, "Address max lenght exceed"),
    email: yup.string().email("Enter Valid Email").max(255).required("Email Address Required"),
    dob: yup.date().min(new Date('01-01-1900'))
        .max(new Date(new Date().setDate(new Date()
            .getDate() + 1)), 'Not allow to add future date')
        .required("Date of Birth Required").nullable().default(undefined),
    // profilePic: yup.mixed()
    //     .test("type", "Profile image Required", (value) => {
    //         if(value.length < 1) {
    //             alert('Profile image Required');
    //         }
    //         return value && (value[0].type === "image/jpeg" || value[0].type === "image/png");
    //     })
    //     .test("fileSize", "The file is too large", (value) => {
    //         return value && value[0].size <= 3000000;
    //     })
    //     .test("type", "We only support JPEG/PNG", (value) => {
    //         return value && (value[0].type === "image/jpeg" || value[0].type === "image/png");

    //     })

});



export default schema;
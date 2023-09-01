import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const formValidationSchema = yup.object({
  appName: yup.string().required("App Name is required"),
  volumeNumber: yup
    .number()
    .required("Volume Number is required")
    .positive("Volume Number must be positive")
    .integer("Volume Number must be an integer")
});

const AppNameForm = () => {
  const formik = useFormik({
    initialValues: {
      appName: "",
      volumeNumber: ""
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Printing submitted form data :-", values);
    }
  });

  return (
    <form
      style={{ 
        width: '40%', 
        margin: '0 auto'
      }}
      onSubmit={formik.handleSubmit}
      aria-label="App Name and Volume Form"
    >
      <TextField
        id="appName"
        name="appName"
        label="App Name"
        variant="outlined"
        fullWidth
        margin="normal"
        {...formik.getFieldProps("appName")}
        error={formik.touched.appName && Boolean(formik.errors.appName)}
        helperText={formik.touched.appName && formik.errors.appName}
      />

      <TextField
        id="volumeNumber"
        name="volumeNumber"
        label="Volume Number"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
        {...formik.getFieldProps("volumeNumber")}
        error={
          formik.touched.volumeNumber && Boolean(formik.errors.volumeNumber)
        }
        helperText={formik.touched.volumeNumber && formik.errors.volumeNumber}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default AppNameForm;

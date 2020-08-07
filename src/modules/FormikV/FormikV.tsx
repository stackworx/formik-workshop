import { Typography } from "@material-ui/core";
import { Field, FieldProps, Formik } from "formik";
import React from "react";

interface FormType {
  name: string;
  age: number;
  gender?: "male" | "female";
}

export function JustFormik() {
  const initialValues: FormType = {
    name: "",
    age: 0,
  };

  // function validateString(value: string) {
  //   return typeof value === "string" ? "This is not of the right type" : "";
  // }
  // function validateEmptyString(value: string) {
  //   return value.length > 0
  //     ? ""
  //     : "This is a required field and cant be left empty";
  // }
  // function validateSpaceInEmptyString(value: string) {
  //   return value.length > 0 && value.charCodeAt(0) === 32
  //     ? "This is a required field and cant be left empty"
  //     : "";
  // }
  // const validateName = (value: string) => {
  //   const errors = [];
  //   const error1 = validateEmptyString(value);
  //   if (error1 !== "") {
  //     errors.push(error1);
  //   }
  //   const error2 = validateString(value);
  //   if (error2 !== "") {
  //     errors.push(error2);
  //   }
  //   const error3 = validateSpaceInEmptyString(value);
  //   if (error3 !== "") {
  //     errors.push(error3);
  //   }
  //   return errors[0];
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        alert("Submit fired");
      }}
    >
      {({ submitForm, values, errors, touched, handleBlur, handleChange }) => {
        return (
          <>
            <input
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Typography color="error">{errors.name}</Typography>
            <br />
            <input
              name="age"
              type="number"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field name="name">
              {({ field, form, meta }: FieldProps) => {}}
            </Field>
            <br />
            <br />
            <button onClick={submitForm}>Submit</button>
            <br />
            VALUE:
            <br />
            {JSON.stringify(values, null, 2)}
            <br />
            ERROR:
            <br />
            {JSON.stringify(errors, null, 2)}
            <br />
            VALUE:
            <br />
            {JSON.stringify(touched, null, 2)}
          </>
        );
      }}
    </Formik>
  );
}

import { Typography } from "@material-ui/core";
import React from "react";

interface FormType {
  name: string;
  age: number;
  gender?: "male" | "female";
}
interface FormTouched {
  name: boolean;
  age: boolean;
  gender: boolean;
}
export function NoFormik() {
  const initialValues: FormType = {
    name: "",
    age: 0,
  };
  const [state, setActualState] = React.useState<FormType>(initialValues);
  const [errors, setActualErrors] = React.useState<FormType>(initialValues);
  const [touched, setActualTouched] = React.useState<FormTouched>({
    name: false,
    age: false,
    gender: false,
  });
  const setState = React.useCallback(
    (props: Partial<FormType>) =>
      setActualState((prev: FormType) => ({ ...prev, ...props })),
    [setActualState]
  );
  const setErrors = React.useCallback(
    (props: Partial<FormType>) =>
      setActualErrors((prev: FormType) => ({ ...prev, ...props })),
    [setActualErrors]
  );
  const setTouched = React.useCallback(
    (props: Partial<FormTouched>) =>
      setActualTouched((prev: FormTouched) => ({ ...prev, ...props })),
    [setActualTouched]
  );
  function validateString(value: string) {
    return typeof value === "string" ? "This is not of the right type" : "";
  }
  function validateEmptyString(value: string) {
    return value.length > 0
      ? ""
      : "This is a required field and cant be left empty";
  }
  function validateSpaceInEmptyString(value: string) {
    return value.length > 0 && value.charCodeAt(0) === 32
      ? "This is a required field and cant be left empty"
      : "";
  }
  const validateName = React.useCallback(
    (value: string) => {
      const errors = [];
      const error1 = validateEmptyString(value);
      if (error1 !== "") {
        errors.push(error1);
      }
      const error2 = validateString(value);
      if (error2 !== "") {
        errors.push(error2);
      }
      const error3 = validateSpaceInEmptyString(value);
      if (error3 !== "") {
        errors.push(error3);
      }
      setErrors({ name: errors[0] });
    },
    [setErrors]
  );

  return (
    <form
      onSubmit={() => {
        alert("Submit fired");
      }}
    >
      <input
        name="name"
        value={state.name}
        onBlur={() => {
          validateName(state.name);
          setTouched({ name: true });
        }}
        onChange={(e) => {
          setState({ name: e.target.value });

          if (touched.name) {
            validateName(state.name);
          }
        }}
      />
      <Typography color="error">{errors.name}</Typography>
      <br />
      <input
        name="age"
        value={state.age}
        type="number"
        onChange={(e) => {
          setState({ age: parseInt(e.target.value) });
        }}
      />
      <br />
      <input
        name="gender"
        type="radio"
        value="male"
        onChange={() => {
          setState({ gender: "male" });
        }}
      />
      <input
        name="gender"
        type="radio"
        value="female"
        onChange={() => {
          setState({ gender: "female" });
        }}
      />
      <br />
      <button type="submit">Submit</button>
      <br />
      VALUE:
      <br />
      {JSON.stringify(state, null, 2)}
      <br />
      ERROR:
      <br />
      {JSON.stringify(errors, null, 2)}
      <br />
      VALUE:
      <br />
      {JSON.stringify(touched, null, 2)}
    </form>
  );
}

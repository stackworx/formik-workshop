---
id: simple-form-with-field
title: The Field
---

The field component helps extract event handling into a lower component

Following on the previous component We will now replace the input component with a Formik Field component

```jsx
import { Field } from "formik";
```

```jsx
<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
  {(formikBag) => {
    const {
      errors,
      touched,
    } = formikBag;
    return (
      <>
        <Field
          name="name"
          type="text"
          //By using the field we can remove the below as it is now managed by the component
          //   value={value.name}
          //   onChange={(e) => {
          //     handleChange(e);
          //     setFieldError("name", validate(values.name));
          //   }}
          //   onBlur={handleBlur}
        />
        {/*
        Here the error will show as soon as its validated
        */}
        <p>{errors}</p>
        {/*
        Here the error will show on on click away and validation
        */}
        {touched.name && errors.name && <p>{errors}</p>}
        {/*
        Alternately we can use the Formik ErrorMessage component and just give the
        field name, then that fields error message will show
        */}
        <ErrorMessage name="name">
      </>
    );
  }}
</Formik>
```

Below is the different implementations of a field with custom visual components

```jsx
// OLD AND DEPRECATED
<Field
name="name"
render={({field})=>{
    return <input {...field}/>
}}
/>

// SIMILAR `REUSABLE`
<Field
name="name"
component={({field})=>{
    return <input {...field}/>
}}
/>

// ALTERNATE `context child consumer`
<Field>
{()=>{
return <input {...field}/>
}}
</Field>

// PREFERRED
useField();

```

The field hook

### References

- https://reactjs.org/docs/forms.html

---
id: simple-form-with-formik

title: Simple Form With Formik
---

Here follows an example using Formik

We will be doing the same example as previous but with the help of formik

Go to the file simpleFormWithFormik.tsx

- Add a Formik Wrapper like below

```jsx
<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
  {() => {
    return <>//Your code goes here</>;
  }}
</Formik>
```

- Add an input with a name like below in your return

```jsx
<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
  {() => {
    return (
      <>
        <input name="name" type="text" />
      </>
    );
  }}
</Formik>
```

- So above we added a Formik Context (Both Provider and Consumer) and an uncontrolled input

- No we will be doing some magic

- Formik exposes some helper props previously known as the formik bag

```jsx
<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
  {(formikBag) => {
    const { handleChange, handleBlur, values } = formikBag;
    return (
      <>
        <input
          name="name"
          type="text"
          value={value.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </>
    );
  }}
</Formik>
```

- We are still missing validation and showing an error

```js
function validate(value: string) {
  return !(value.length > 0);
}
```

```jsx
<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
  {(formikBag) => {
    const {
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
      setFieldError,
    } = formikBag;
    return (
      <>
        <input
          name="name"
          type="text"
          value={value.name}
          onChange={(e) => {
            handleChange(e);
            setFieldError("name", validate(values.name));
          }}
          onBlur={handleBlur}
        />
        {/*
        Here the error will show as soon as its validated
        */}
        <p>{errors}</p>
        {/*
        Here the error will show on on click away and validation
        */}
        {touched.name && errors.name && <p>{errors}</p>}
      </>
    );
  }}
</Formik>
```

- We can still see there is a lot of code happening
- To Simplify the code even more we introduce fields

### References

- You can look at the FormikV.tsx in the example project to see some more formik hookups

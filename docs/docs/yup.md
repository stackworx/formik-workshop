---
id: yup
title: Yup
---

Validation is a very repetitive task, and can easily clutter code

Thanks to Yup, validation is made super easy.

- If you take a look in the basic validation in the Example project NoFormik.tsx you will see how much work a simple string validation can be, and how much it can clutter the code.

Below follows an example of yup integration with Formik

```jsx
import * as yup from "yup";
import Formik, { Field } from "formik";
import { TextField } from "formik-material-ui";

const validationSchema = yup.object().shape({
  name: yup.string().required("This is a required field"),
});

<Formik
  validationSchema={validationSchema}
  initialValues={{ name: "" }}
  onSubmit={() => {}}
>
  {(formikBag) => {
    const { errors, touched } = formikBag;
    return (
      <>
        <Field name="name" component={TextField} />
      </>
    );
  }}
</Formik>;
```

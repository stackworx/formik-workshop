---
id: material-ui
title: Material Ui
---

Manual Material Ui Integration

Seeing as we are integrating Material UI with most of our projects Integrating the UI library with the form management is quite important

As discussed in the previous section there are a lot ways to use the Field Component

```jsx
import TextField from "@material-ui/core/TextField";
import Field from "formik";
```

```jsx
<Field>
  {(fieldProps) => {
    //  field: FieldInputProps<V>;
    // form: FormikProps<FormValues>;
    // meta: FieldMetaProps<V>;
    const { field, meta, form } = fieldProps;
    return (
      <TextField
        {...field}
        error={meta.error && meta.touched}
        helperText={meta.touched && meta.error ? meta.error : ""}
      />
    );
  }}
</Field>
```

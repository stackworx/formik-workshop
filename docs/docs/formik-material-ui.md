---
id: formik-material-ui
title: Formik Material Ui
---

Using Formik Material Ui Integration

No matter what route you take, you will always have to do the material-ui hookup to formik,

Thanks to the Formik to Material UI mapping we can skip that step and use the components from the formik-material-ui library

- Make sure you use the correct import

```jsx
import { TextField } from "formik-material-ui";
```

```jsx
<Field
name="name"
component={TextField}
>
```

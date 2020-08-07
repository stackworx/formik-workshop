---
id: simple-form-no-formik

title: Simple Form No Formik
---

In the file no formik an example of a basic form has been set up to illustrate how much work goes into building a form and managing states.

Lets build a simple input with validation as example

Go to the file SimpleFormNoFormik.tsx

- Add an input with a name like below in your return

```tsx
<input name="name" type="text" />
```

You can go two ways about managing this component:

- Controlled(state)
- Uncontrolled(Ref)
  --ReadMore
  https://reactjs.org/docs/forms.html

Lets add state and manage the value of the input

```tsx
const [value, setValue] = React.useState("");
return <input name="name" value={state.name} />;
```

If you try and type now nothing will happen because nothing tells the state to update

- You can now add the onChange to update the state

```tsx
const [value, setValue] = React.useState("");
return (
  <input
    name="name"
    value={state.name}
    onChange={(e) => {
      setState(e.target.value);
    }}
  />
);
```

This doesn't seem like a lot of work but lets start thinking real form

We need to think of three primary things when we do any form

- state (value)
- errors
- touched

In the example above we have the state covered lets add some error handling;
So primarily you don't want a component to start out in an error state,
thats why we need to track touched, them we only show the error once the
component has been touched.
Sooo
When do we start doing validation, and when do we fire the validation check?

- onChange
- onBlur
- onFocus

So you can fire the validation on all of them, but that will also determine when the error will show

```tsx
const [value, setValue] = React.useState("");
const [error, setError] = React.useState("");
const validate = () => {
  const error = value.length > 0 ? "" : "This is a required field";
  setError(error);
};
return (
  <input
    name="name"
    value={state.name}
    onChange={(e) => {
      setState(e.target.value);
      validate();
    }}
  />
  <p>{error}</p>
);
```

In the above code the validation will start as soon as we start typing;

The problem here is you want to only start showing validation errors when you:

- submit a form
- set focus back to the form

For that we add the touched state

```tsx
const [value, setValue] = React.useState("");
const [error, setError] = React.useState("");
const [touched, setTouched] = React.useState(false);
const validate = () => {
  const error = value.length > 0 ? "" : "This is a required field";
  setError(error);
};
return (
  <input
    name="name"
    value={state.name}
    onFocus={()=>{
      // We don't set touched here,
      // because then we will see the errors
      // as soon as we start typing
    }}
    onBlur={()=>{
      //You can set it here
      // it will then validate on the first click away
      setTouched(true)
    }}
    onChange={(e) => {
      setState( e.target.value);
      validate();
    }}
  />
  <p>{error}</p>
);
```

As you can see there is a lot of work going into the management of one components state,
That is why we use formik to handle this in the background, and leave us with the rest of the basic capture logic

### References

- You can look at the NoFormik.tsx in the example project on how tedious the above really gets

import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NoFormik } from "./modules/NoFormik/NoFormik";
import { JustFormik } from "./modules/FormikV/FormikV";
import { SimpleFormNoFormik } from "./modules/SimpleFormNoFormik/SImpleFormNoFormik";
import { SimpleFormWithFormik } from "./modules/SimpleFormWithFormik/SImpleFormWithFormik";
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: 400,
  },
  nav: {
    width: "100%",
  },
}));
export default function App() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        NAV:
        <br />
        <Button
          onClick={() => {
            setPage(1);
          }}
        >
          SimpleFormNoFormik
        </Button>
        <br />
        <Button
          onClick={() => {
            setPage(2);
          }}
        >
          SimpleFormWithFormik
        </Button>
        <br />
        <Button
          onClick={() => {
            setPage(3);
          }}
        >
          No Formik
        </Button>
        <br />
        <Button
          onClick={() => {
            setPage(4);
          }}
        >
          Formik No Field
        </Button>
      </div>
      {page === 1 && <SimpleFormNoFormik />}
      {page === 2 && <SimpleFormWithFormik />}
      {page === 3 && <NoFormik />}
      {page === 4 && <JustFormik />}
    </div>
  );
}

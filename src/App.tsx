import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NoFormik } from "./modules/NoFormik/NoFormik";
import { JustFormik } from "./modules/FormikV/FormikV";
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
          No Formik
        </Button>
        <br />
        <Button
          onClick={() => {
            setPage(2);
          }}
        >
          Formik No Field
        </Button>
      </div>
      {page === 1 && <NoFormik />}
      {page === 2 && <JustFormik />}
    </div>
  );
}

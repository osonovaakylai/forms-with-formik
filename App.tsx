import * as React from "react";
import { Formik } from "formik";
import MyForm from "./components/MyForm";
import schema from "./ValidationSchema";

export interface FormValues {
  people: FormValue[];
}

import "./App.css";

export interface FormValue {
    firstName: string;
    pet: string;
}

const initialValues: FormValues = {
  people: [
    {
      firstName: "",
      pet: "",
    },
    {
      firstName: "",
      pet: "",
    },
  ],
};

const App = () => (
    <React.Fragment>
        <h1>Working with Formik</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values: FormValues) => console.log(values)}
          validationSchema={schema}
          render={MyForm}
        />
    </React.Fragment>
);

export default App;

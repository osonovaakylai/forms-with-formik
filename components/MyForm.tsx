import * as React from "react";
import {
  Field,
  FieldArray,
  Form,
  FormikProps,
} from "formik";
import TextField from "./TextField";
import {FormValues} from "../App";

const MyForm = (props: FormikProps<FormValues>) => {
  const { values } = props;
  return (
    <Form>
      <FieldArray name="people"
        render={(helpers) => (
          <div>
            {values.people && values.people.length > 0 ? (
              values.people.map( (person, index) => (
                <React.Fragment key={index}>
                  <Field name={`people.${index}.firstName`} render={(innerProps) => (
                    <TextField {...innerProps} title="First Name" index={index}/>
                  )}/>
                  <label htmlFor="pet">
                    <div>Pet</div>
                    <Field name={`people.${index}.pet`} component="select">
                      <option value="Dog">Dog</option>
                      <option value="Cat">Cat</option>
                      <option value="Other">Other</option>
                    </Field>
                  </label>
                </React.Fragment>
              ))
            ) : null}
            <button type="submit" className="button">Submit</button>
          </div>
        )}/>
    </Form>
  );
};

export default MyForm;

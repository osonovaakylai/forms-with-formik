import React from "react";
import { FieldProps } from "formik";
import { FormValues } from "../App";
import styled from "styled-components";

// const Title = styled.h2`
//     font-family: Arial, Helvetica, sans-serif;
//     color: cornflowerblue;
//     margin-bottom: 5px;
// `;

const FormInput = styled.input`
  padding: .5rem;
  font-size: 16px;
  width: 100%;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
  :focus {
  border-color: #007eff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
                0 0 0 3px rgba(0, 126, 255, 0.1);
  outline: none;
  }
`;

const InputError = styled.div`
  color: red;
  margin-top: .25rem;
`;

interface Props {
    title: string;
}

type OwnProps = FieldProps<FormValues> & Props;

const TextField = (props: OwnProps) => {

  const { title, field, form, index } = props;
  return (
    <div>
      <label htmlFor={field.name} className="label">
        <label>{title}</label>
        <FormInput type="text" {...field}/>
        {
          form.errors.people
          && form.errors.people[index]
          && form.touched.people
          && form.touched.people[index] &&
          <InputError>{form.errors.people[index].firstName}</InputError>
        }
      </label>
    </div>
    );
};

export default TextField;

import * as Yup from "yup";

const schemaObject = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  pet: Yup.string(),
});

const schema = Yup.object().shape({
  people: Yup.array().of(schemaObject),
});

export default schema;

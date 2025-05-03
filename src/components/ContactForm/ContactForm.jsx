import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import "yup-phone-lite";

const OrderSchema = Yup.object().shape({
  // id: Yup.string().min(3).max(30).required(),
  name: Yup.string().min(3, "Too short").max(50).required(),
  number: Yup.string()
    .phone("UA", "Please enter a valid phone number")
    .required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  // const fieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
      onSubmit(values);


    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OrderSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
		<div className={css.test}>
        <Field className={css.field} type="text" name="name" />
		<ErrorMessage className={css.error} name="name" component="span" />
		</div>
        <Field className={css.field} type="number" name="number" />
		<ErrorMessage name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

import { Formik, Form, Field } from 'formik';
import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
			<Form className={css.form}>
	      <Field className={css.field} type="text" name="username" />
				<Field className={css.field} type="number" name="phone" />
				<button className={css.btn} type="submit">Submit</button>
			</Form>
    </Formik>
  );
};

export default ContactForm;
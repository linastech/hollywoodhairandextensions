import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import Button from '../button'
import styles from './ContactForm.module.scss'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(50, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().phone().required()
})

export default function ContactForm(){
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <div className={styles.container}>
          <Form>
            <div className={styles.colWrapper}>
              <div>
                <div className={styles.field}>
                  <Field name="firstName" placeholder="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <div className={styles.error}>{errors.firstName}</div>
                  ) : null}
                </div>
                <div className={styles.field}>
                  <Field name="lastName" placeholder="Last name" />
                  {errors.lastName && touched.lastName ? (
                    <div className={styles.error}>{errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <div>
                <div className={styles.field}>
                  <Field name="email" type="email" placeholder="E-mail" />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                </div>
                <div className={styles.field}>
                  <Field name="phone" placeholder="Phone Number" />
                  {errors.phone && touched.phone ? (
                    <div className={styles.error}>{errors.phone}</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <Field name="message" as="textarea" placeholder="Message" />
              {errors.message && touched.message ? (
                <div className={styles.error}>{errors.message}</div>
              ) : null}
            </div>
            {/* <button type="submit">Submit</button> */}
            <Button>Send message</Button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

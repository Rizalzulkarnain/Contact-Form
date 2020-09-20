import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikControl from '../FormikContainer/FormikControl';

import { H3, Button, ButtonContainer } from '../styles';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .required('Required lastname field!'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required email field!'),
    subject: Yup.string()
      .min(3, 'Too Short!')
      .required('Required subject field!'),
    message: Yup.string()
      .min(6, 'Too Short!')
      .required('Required message field!'),
  });

  const onSubmit = (values, { resetForm }) => {
    try {
      const headers = {
        mode: 'same-origin',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      axios.post(process.env.MAIL_LINK, values, headers).then((response) => {
        console.log(response);
      });

      swal('Terima Kasih atas saran dan kritiknya!', '', 'success');
    } catch (error) {
      swal('Please... Check your connection!', '', 'error');
      console.error(error.message);
    }

    resetForm({ value: '' });
  };

  return (
    <div>
      <H3>Silahkan Diisi...!</H3>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  label="Name Lengkap"
                  name="name"
                />

                <FormikControl
                  control="input"
                  type="email"
                  label="Email"
                  name="email"
                />

                <FormikControl
                  control="input"
                  type="text"
                  label="Judul"
                  name="subject"
                />

                <FormikControl
                  control="textarea"
                  type="text"
                  label="Kritik dan Saran"
                  name="message"
                />

                <ButtonContainer>
                  <Button type="submit" disabled={!formik.isValid}>
                    Submit
                  </Button>
                </ButtonContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;

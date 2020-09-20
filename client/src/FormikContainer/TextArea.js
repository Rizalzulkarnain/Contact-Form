import React from 'react';
import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

import { FormGroup, Label } from './FormGroupStyle';

const TextArea = ({ label, name, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default React.memo(TextArea);

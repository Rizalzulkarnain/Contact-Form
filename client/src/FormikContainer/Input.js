import React from 'react';
import { Field, ErrorMessage } from 'formik';

import TextError from './TextError';

import { FormGroup, Label } from './FormGroupStyle';

const Input = ({ label, name, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default React.memo(Input);

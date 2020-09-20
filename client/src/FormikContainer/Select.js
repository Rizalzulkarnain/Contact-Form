import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { FormGroup, Label } from './FormGroupStyle';
import TextError from './TextError';

const Select = ({ label, name, options, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default React.memo(Select);

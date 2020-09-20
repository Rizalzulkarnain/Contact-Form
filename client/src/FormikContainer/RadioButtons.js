import React from 'react';
import { Field, ErrorMessage } from 'formik';

import { RadioCheck, Label } from './FormGroupStyle';
import TextError from './TextError';

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <RadioCheck>
      <Label>{label}</Label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </RadioCheck>
  );
};

export default React.memo(RadioButtons);

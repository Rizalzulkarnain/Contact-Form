import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

import { RadioCheck, Label } from './FormGroupStyle';

const CheckboxGroup = ({ label, name, options, ...rest }) => {
  return (
    <RadioCheck>
      <Label>{label}</Label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </RadioCheck>
  );
};

export default React.memo(CheckboxGroup);

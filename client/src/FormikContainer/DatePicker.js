import React from 'react';
import { Field, ErrorMessage } from 'formik';

import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import TextError from './TextError';

import { FormGroup, Label } from './FormGroupStyle';

const DatePicker = ({ label, name, ...rest }) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </FormGroup>
  );
};

export default React.memo(DatePickerDatePicker);

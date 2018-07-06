import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}: WrappedFieldProps) => (
  <TextField label={label} error={touched && error} {...input} {...custom} />
);

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}: WrappedFieldProps & { children: React.ReactNode }) => (
  <Select
    error={touched && error}
    {...input}
    onChange={event => input.onChange(event.target.value)}
    children={children}
    {...custom}
  />
);

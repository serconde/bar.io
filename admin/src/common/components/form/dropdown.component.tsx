import React from 'react';
import { useField } from 'formik';
import Select, { SelectProps } from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';
import * as classes from './dropdown.style';

export const DropDownComponent: React.FunctionComponent<SelectProps> = (props) => {
  const { children } = props;
  const [field, meta] = useField(props.name);
  const hasError = Boolean(meta && meta.touched && meta.error);

  return (
    <div className={classes.container}>
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <Select
        {...props}
        labelId={props.labelId}
        name={props.name ?? field.name}
        onChange={props.onChange ?? field.onChange}
        onBlur={props.onBlur ?? field.onBlur}
        value={props.value ?? field.value}
        disabled={props.disabled}
        error={hasError}
        fullWidth={true}>
        {children}
      </Select>
    </div>
  );
};

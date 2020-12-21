import React from 'react';
import { useField } from 'formik';
import Select, { SelectProps } from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';

export const DropDownComponent: React.FunctionComponent<SelectProps> = (props) => {
  const { children } = props;
  const [, meta] = useField(props.name);
  const hasError = Boolean(meta && meta.touched && meta.error);

  return (
    <>
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <Select
        labelId={props.labelId}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.disabled}
        error={hasError}
        fullWidth={true}>
        {children}
      </Select>
    </>
  );
};

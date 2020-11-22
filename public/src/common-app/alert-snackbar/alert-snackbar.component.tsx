import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';

export enum Severity {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}

export enum VerticalPosition {
  BOTTOM = 'bottom',
  TOP = 'top',
}

export enum HorizontalPosition {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

interface AlertSnackbarComponentProps {
  open: boolean;
  onClose: () => void;
  severity: Severity;
  message: string;
  autoHideDuration: number;
  vertical: VerticalPosition;
  horizontal: HorizontalPosition;
}

export const AlertSnackbarComponent: React.FunctionComponent<AlertSnackbarComponentProps> = (
  props,
) => {
  const { open, onClose, severity, message, autoHideDuration, vertical, horizontal } = props;

  const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant='filled' {...props} />;

  const handleClose = () => {
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

import React from 'react';

//Form
import { Formik, Form } from 'formik';
import { formValidation } from './login.validation';

//Vm
import { Login, createEmptyLogin } from './login.vm';

//Component
import { TextFieldComponent } from 'common/components';

//Material ui
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FunctionComponent<Props> = (props) => {
  const { onLogin } = props;

  return (
    <Card>
      <CardHeader title='Login' />
      <CardContent>
        <Formik
          onSubmit={onLogin}
          initialValues={createEmptyLogin()}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TextFieldComponent name='user' label='Name' />
                <TextFieldComponent name='password' label='Password' type='password' />
                <Button type='submit' variant='contained' color='primary'>
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

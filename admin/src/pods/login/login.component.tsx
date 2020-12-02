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

//CSS
import * as classes from './login.styles';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FunctionComponent<Props> = (props) => {
  const { onLogin } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title='Login' className={classes.title} />
      <CardContent>
        <Formik
          onSubmit={onLogin}
          initialValues={createEmptyLogin()}
          validate={formValidation.validateForm}>
          {() => (
            <Form>
              <div className={classes.formLogin}>
                <TextFieldComponent name='email' label='EMail' />
                <TextFieldComponent name='password' label='Clave' type='password' />
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

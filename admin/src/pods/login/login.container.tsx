import React from 'react';

//Router
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

//Api
import { isValidLogin } from './api/login-api';

//Vm
import { Login } from './login.vm';

//Component
import { LoginComponent } from './login.component';

export const LoginContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const loginSucceeded = (userName: string, isValid: boolean): void => {
    if (isValid) {
      // Need to save user in session
      history.push(routes.dashboard);
    } else {
      // Snackbar error
      alert('Invalid login');
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.user, login.password).then((result) => {
      loginSucceeded(login.user, result);
    });
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};

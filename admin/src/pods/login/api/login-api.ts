//Mock api
export const isValidLogin = (email: string, password: string): Promise<boolean> =>
  new Promise((resolve) => {
    setTimeout(() => {
      // mock call
      resolve(email === 'admin@prueba.com' && password === 'test');
    }, 500);
  });

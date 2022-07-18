const patettern ={
     password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3}/g,
}

export const inputsLoginForm = [
     {
          id: 'login',
          textError: 'Please fill all fields',
          messageId:  'message',
          type: 'simpleField',
          selector: 'error',
          },
          {
          id: 'password1',
          textError: 'Please fill all fields',
          messageId: 'message',
          type: 'specialField',
          regex: patettern.password,
          selector: 'error',
          }, 
]
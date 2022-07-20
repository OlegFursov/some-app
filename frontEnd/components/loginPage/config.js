import { pattern } from "../../helper/pattern.js"

export const inputsLoginForm = [
     {
          id: 'login',
          errorText: 'Please enter here your Login',
          errorPlace:  'errorPlace-LoginForm',
          regex: pattern.isEmpty,
          type: 'simpleField',
          selector: 'error',
          },
          {
          id: 'password1',
          errorText: 'Please enter here your password',
          errorPlace: 'errorPlace-passwordLoginForm',
          type: 'specialField',
          regex: pattern.password,
          selector: 'error',
          }, 
]
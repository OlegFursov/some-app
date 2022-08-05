import { pattern } from "../../config/config-pattern"

export const inputsLoginForm = [
     {
          id: 'login',
          errorText: 'Please enter here your Login',
          errorPlace:  'errorPlace-LoginForm',
          regex: pattern.isEmpty,
          type: 'simpleField',
          errorStyle: 'error',
     },
     {
          id: 'password1',
          errorText: 'Please enter here your password',
          errorPlace: 'errorPlace-passwordLoginForm',
          type: 'specialField',
          regex: pattern.password,
          errorStyle: 'error',
     }, 
]
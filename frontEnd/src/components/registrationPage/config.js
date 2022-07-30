import { pattern } from "../../helper/pattern"

export const inputRegistrationForm = [           
     {
     id: 'name',
     errorText: 'Please fill all fields',
     errorPlace:  'errorPlace-name',
     regex: pattern.isEmpty,
     errorStyle: 'error',
     },
     {
     id: 'login',
     errorText: 'Please fill all fields',
     errorPlace: 'errorPlace-login',
     regex: pattern.isEmpty,
     errorStyle: 'error',
     }, 
     {
     errorText: 'Please fill all fields',
     errorPlace: 'errorPlace-email',
     regex: pattern.email,
     errorStyle: 'error',
     id: 'email'
     },
     { 
     errorText: 'Please fill all fields',
     errorPlace: 'errorPlace-gender',
     regex: pattern.isEmpty,
     errorStyle: 'error',
     id: 'gender'
     },
     { 
     errorText: 'Only number',
     errorPlace: 'errorPlace-phoneNumber',
     regex: pattern.phoneNumber,
     errorStyle: 'error',
     id: 'phoneNumber'
     }, 
     { 
     errorText: 'This is field must starts with Capital letter',
     errorPlace: 'errorPlace-city',
     regex: pattern.city,
     errorStyle: 'error',
     id: 'city'
     },
     {
     errorText: 'Password should be more then 8 symbol, and containts special symbol, number and Capitel letters',
     errorPlace: 'errorPlace-password1',
     regex: pattern.password,
     errorStyle: 'error',
     id: 'password1'
     },
     {
     errorText: 'Password should be more then 8 symbol, and containts special symbol, number and Capitel letters',
     errorPlace: 'errorPlace-password2',
     regex: pattern.isEmpty,
     errorStyle: 'error',
     id: 'password2'
     }
      
     
]
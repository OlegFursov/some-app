import { pattern } from "../../helper/pattern.js"

export const inputRegistrationForm = [           
     {
     id: 'name',
     errorText: 'Please fill all fields',
     errorPlace:  'errorPlace-name',
     regex: pattern.isEmpty,
     selector: 'error',
     },
     {
     id: 'login',
     errorText: 'Please fill all fields',
     errorPlace: 'errorPlace-login',
     regex: pattern.isEmpty,
     selector: 'error',
     }, 
     {
     errorText: 'Please fill all fields',
     errorPlace: 'errorPlace-email',
     regex: pattern.email,
     selector: 'error',
     id: 'email'
     },
     { 
     errorText: 'Please fill all fields',
     errorPlace: 'errorPlace-gender',
     regex: pattern.isEmpty,
     selector: 'error',
     id: 'gender'
     },
     { 
     errorText: 'Only number',
     errorPlace: 'errorPlace-phoneNumber',
     regex: pattern.phoneNumber,
     selector: 'error',
     id: 'phoneNumber'
     }, 
     { 
     errorText: 'This is field must starts with Capital letter',
     errorPlace: 'errorPlace-city',
     regex: pattern.city,
     selector: 'error',
     id: 'city'
     },
     {
     errorText: 'Password should be more then 8 symbol, and containts special symbol, number and Capitel letters',
     errorPlace: 'errorPlace-password1',
     regex: pattern.password,
     selector: 'error',
     id: 'password1'
     },
     {
     errorText: 'Password should be more then 8 symbol, and containts special symbol, number and Capitel letters',
     errorPlace: 'errorPlace-password2',
     regex: pattern.isEmpty,
     selector: 'error',
     id: 'password2'
     }
      
     
]
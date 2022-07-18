

export const regex = {
     phoneNumber: /^[\d\+][\d\(\)\ -]{9,14}\d$/,
     city: /^[A-Z]{1}/,
     password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3}/g,
     email:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
}

export const inputRegistrationForm = [           
     {
     id: 'name',
     textError: 'Please fill all fields',
     messageId:  'message',
     type: 'simpleField',
     selector: 'error',
     },
     {
     id: 'login',
     textError: 'Please fill all fields',
     messageId: 'message',
     type: 'simpleField',
     selector: 'error',
     }, 
     {
     textError: 'Please fill all fields',
     messageId: '',
     regex: regex.email,
     type: 'specialField',
     selector: 'error',
     id: 'email'
     },
     { 
     textError: 'Please fill all fields',
     messageId: 'message',
     type: 'simpleField',
     selector: 'error',
     id: 'gender'
     },
     { 
     textError: 'Only number',
     messageId: 'message',
     regex: regex.phoneNumber,
     type: 'specialField',
     selector: 'error',
     id: 'phoneNumber'
     }, 
     { 
     textError: 'This is field must starts with Capital letter',
     messageId: 'message',
     type: 'specialField',
     regex: regex.city,
     selector: 'error',
     id: 'city'
     },
     {
     textError: 'Password should be more then 8 symbol, and containts special symbol, number and Capitel letters',
     messageId: 'message',
     type: 'specialField',
     regex: regex.password,
     selector: 'error',
     id: 'password1'
     },
     {
     textError: 'Password should be more then 8 symbol, and containts special symbol, number and Capitel letters',
     messageId: 'message',
     type: 'simpleField',
     regex: regex.password,
     selector: 'error',
     id: 'password2'
     }
      
     
]
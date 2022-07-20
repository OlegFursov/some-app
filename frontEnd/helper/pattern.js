export const pattern = {
     phoneNumber: /^[\d\+][\d\(\)\ -]{9,14}\d$/,
     city: /^[A-Z]{1}/,
     password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3}/g,
     email:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
     isEmpty: /[\w\d\W\D]{1}/g,
}
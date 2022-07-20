
export const validators ={
     // isEmpty: (value)=>{
     //      return !! value.length;
     // },
     isValidlInputs: (regex, value) => {
          return regex.test(value);
     },
}

export const isValidFormInput = (props) => {
     return props.forEach(e => e.isValid = e.validator(e.regex, e.field.value))
} 

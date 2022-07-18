
export const validators ={
     isEmpty: (value)=>{
          return !! value.length;
     },
     isValidSpecialInput: (regex,value) => {
          return regex.test(value);
     },
}
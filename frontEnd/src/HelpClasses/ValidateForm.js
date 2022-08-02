import { Control } from "./Control";

export class ValidateForm {
     constructor(config, state){
         this.controls = config.map(control => new Control(control));
         this.state = state;
     }

     check(){ 
          this.controls.forEach(control => control.isValidate());
          this.setErrorToField();
     }

     setErrorToField(){
          this.controls.forEach(control => !control.isValid ? control.setError(): control.removeError());
     }
     
     isValid(){
          return this.controls.every(input => input.isValid)
     }

    

     setState(){
          return this.controls.forEach(value => {
               if(value.field.type !== 'password'){
                    this.state[`${value.field.id}`] = value.field.value.toLowerCase()
               }else{
                    this.state[`${value.field.id}`] = value.field.value
               }
              
          })
      }
    
}
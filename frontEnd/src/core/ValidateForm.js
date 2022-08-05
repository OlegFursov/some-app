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

      checkSameTypeFields (findSameTypeFields, removeClassToField, addClassToField){ 
          const sameInputs = findSameTypeFields(this.controls);
          sameInputs[0].field.value == sameInputs[1].field.value ?
          sameInputs.forEach(input => removeClassToField(input.field, input.errorStyle)):
          sameInputs.forEach(input => addClassToField(input.field, input.errorStyle));
     }
    
}
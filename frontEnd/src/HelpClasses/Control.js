import { validators } from "../config/validators";
import { addClassToField, addErrorTextToErrorPlace, removeClassToField, removeErrorTextToErrorPlace} from "../helper/helper";




export class Control {
     constructor (obj){
          this.field = document.getElementById(`${obj.id}`)
          this.errorText = obj.errorText
          this.errorPlace = document.getElementById(`${obj.errorPlace}`)
          this.errorStyle = obj.errorStyle;
          this.regex = obj.regex;
          this.isValid;
          this.showError = this.showError;
         
     }

     isValidate (){
          this.isValid = validators.isValidlInputs(this.regex, this.field.value); 

     }

     setError (){
          addClassToField(this.field, this.errorStyle);
          addErrorTextToErrorPlace(this.errorPlace, this.errorText);
     }

     removeError (){
          removeClassToField(this.field, this.errorStyle);
          removeErrorTextToErrorPlace(this.errorPlace);
     }

     

    

    

     
}
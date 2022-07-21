import { validators } from "../config/validators.js";
import { addClassToField, addErrorTextToErrorPlace, removeClassToField, removeErrorTextToErrorPlace } from "../helper/helper.js";




export class Control {
     constructor (obj){
          this.field = document.getElementById(`${obj.id}`)
          this.errorText = obj.errorText
          this.errorPlace = document.getElementById(`${obj.errorPlace}`)
          this.selector = obj.selector
          this.regex = obj.regex;
          this.isValid = this.isValidate;
          this.showError = this.showError;
         
     }

     isValidate (){
          return validators.isValidlInputs(this.regex, this.field.value); 

     }

     showError (){
          addClassToField(this.field, this.selector);
          addErrorTextToErrorPlace(this.errorPlace, this.errorText);
     }

     hideError (){
          removeClassToField(this.field, this.selector);
          removeErrorTextToErrorPlace(this.errorPlace);
     }

     
}
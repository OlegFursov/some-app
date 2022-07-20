import { validators } from "../config/validators.js"



export class Control {
     constructor (obj){
          this.field = document.getElementById(`${obj.id}`)
          this.errorText = obj.errorText
          this.errorPlace = document.getElementById(`${obj.errorPlace}`)
          this.selector = obj.selector
          this.validator = validators.isValidlInputs;
          this.regex = obj.regex;
          this.isValid = false;
          
     }

}
import { validators } from "../config/validators.js"

validators

export class Control {
     constructor (obj){
          this.field = document.getElementById(`${obj.id}`)
          this.textError = obj.textError
          this.messageField = document.getElementById(`${obj.messageId}`)
          this.selector = obj.selector
          this.validated = obj.type == 'simpleField' ? this.validated = validators.isEmpty : this.validated = validators.isValidSpecialInput;
          this.type = obj.type;
          this.regex = obj.regex;
          this.isValid = false;
          
     }

}
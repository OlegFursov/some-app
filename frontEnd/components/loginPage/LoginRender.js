import { html } from "./htmlPage.js";
import { inputsLoginForm } from "./config.js";
import { Control } from "../../HelpClasses/control.js";
import { ValidateForm } from "../../HelpClasses/validateForm.js";
import { stateLogin, USERS } from "../../helper/constants.js";
import { installState } from "../../helper/helper.js";
import { sendForm } from "../../config/sendForm.js";



export default class LoginRender{
     constructor(){
        this.controls;
        this.validate;
     }
     
     render(){
          return new Promise(res => res(html))
     }

     afterRender(){
          this.createObjects();
          this.installValidClassOnForm();
          this.handelSubmit();
          
     }

     createObjects (){
          this.controls = inputsLoginForm.map(e =>  new Control(e))
     }

     installValidClassOnForm(){
               this.validate = new ValidateForm(this.controls)
     }
     
     handelSubmit(){
          document.getElementById('btn').addEventListener('click',(e) => {
               e.preventDefault();
               this.validate.check();
               this.submitFormToServer();
          }); 
     }

     submitFormToServer (){
          
          if(this.controls.every(control => control.field.required)){
               installState(stateLogin, this.controls);
               sendForm.sendFormLoginPage(USERS, stateLogin)
          }
     }

     


    


     

     
}


import { html } from "./htmlPage.js";
import { inputsLoginForm } from "./config.js";
import { Control } from "../../HelpClasses/control.js";
import { ValidateForm } from "../../HelpClasses/validateForm.js";
import { stateLogin, USERS } from "../../helper/constants.js";
import { installState } from "../../helper/helper.js";
import { sendForm } from "../../config/sendForm.js";



export default class LoginRender{
     constructor(){
        this.props;
        this.validate;
     }
     
     render(){
          return new Promise(res => {
               res(html)
          })
     }

     afterRender(){
          this.createObject();
          this.installValidClassOnForm();
          this.handelSubmit();
          
     }

     createObject (){
          this.props = inputsLoginForm.map(e =>  new Control(e))
     }

     installValidClassOnForm(){
               this.validate = new ValidateForm(this.props)
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
               installState(stateLogin, this.props);
               sendForm.sendFormLoginPage(USERS, stateLogin)
          }
     }

     


    


     

     
}


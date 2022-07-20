import { htmlPage } from "../../html.js";
import { inputsLoginForm } from "./config.js";
import { Control } from "../../HelpClasses/control.js";
import { ValideitForm } from "../../HelpClasses/validateForm.js";
import { stateLogin, USERS } from "../../helper/constants.js";
import { installState } from "../../helper/helper.js";
import { sendForm } from "../../config/sendForm.js";



export default class LoginRender{
     constructor(){
        this.props;
        this.valideit;
        
     }
     
     render(){
          return new Promise(res => {
               res(htmlPage.formLoginPage)
          })
     }

     afterRender(){
          this.createObjField();
          this.handelSubmit();
          
     }

     createObjField (){
          this.props = inputsLoginForm.map(e =>  new Control(e))
     }

     installValidClassOnForm(){
               this.valideit = new ValideitForm(this.props)
     }
     
     handelSubmit(){
          document.getElementById('btn').addEventListener('click',(e) => {
               e.preventDefault();
               this.installValidClassOnForm();
               this.valideit.isValid();
               this.submitFormToServer();
          
          }); 
         
     }

     submitFormToServer (){
          if(this.valideit.isValideited){
               installState(stateLogin, this.props);
               sendForm.sendFormLoginPage(USERS, stateLogin)
          }

          console.log(stateLogin, USERS);
     }

     


    


     

     
}


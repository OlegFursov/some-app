import  html  from "./loginPage.html";
import css from "../../style/style.css"
import { inputsLoginForm } from "./config";
import { ValidateForm } from "../../HelpClasses/ValidateForm";
import { stateLogin} from "../../helper/constants";
import Components from "../../HelpClasses/Components";
import Task from "../../HelpClasses/Task";
import { changeLocalHash } from "../../helper/helper";

export default class LoginRender extends Components{
     constructor(){
     super(html)
     this.form;
     this.task = new Task();

     }

     afterRender(){
          this.createObjects();
          this.handelSubmit();
     }

     createObjects (){
          this.form = new ValidateForm(inputsLoginForm, stateLogin);
     }

     isAuthorized(){
          return this.task.data.find(element => element.password1 === stateLogin.password1 && element.login === stateLogin.login);
     }

     checkUser(){
          return this.isAuthorized() ? changeLocalHash(3) : alert ('Please create account!')
      }

     
     handelSubmit(){
          document.getElementById('btn').addEventListener('click',(e) => {
               e.preventDefault();
               this.form.check();
               if(this.form.isValid()){
                    this.form.setState();
                    this.checkUser();
                    
               } 
          }); 
     }   
}


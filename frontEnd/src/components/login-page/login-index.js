import  html  from "./login-page.html";
import css from "../../style/style.css"
import { inputsLoginForm } from "./login-config";
import { ValidateForm } from "../../core/ValidateForm";
import { stateLoginPage} from "../../constant/constants";
import Components from "../../core/Component";
import Support from "../../core/Support";
import { setHash } from "../../helper/helper";

export default class LoginPage extends Components{
     constructor(){
     super(html)
     this.key = 'User'
     this.form;
     this.support = new Support(this.key);

     }

     afterRender(){
          this.createObjects();
          this.handleSubmit();
     }

     createObjects (){
          this.form = new ValidateForm(inputsLoginForm, stateLoginPage);
     }

     isAuthorized(){
          return this.support.data.find(element => element.password1 === stateLoginPage.password1 && element.login === stateLoginPage.login);
     }

     checkIsAuthorized(){
          return this.isAuthorized() ? setHash('') : alert ('Please create account!')
      }

     
     handleSubmit(){
          document.getElementById('form').addEventListener('submit',(e) => {
               e.preventDefault();
               this.form.check();
               if(this.form.isValid()){
                    this.form.setState();
                    this.checkIsAuthorized();
               } 
          }); 
     }   
}


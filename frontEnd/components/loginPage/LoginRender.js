import { inputsLoginForm } from "./config.js";
import { Control } from "../../HelpClasses/control.js";
import { ValideitForm } from "../../HelpClasses/validateForm.js";
import { sendRequestToServer } from "../../helper/helper.js";
import { stateLogin } from "../../helper/constants.js";



export default class LoginRender{
     constructor(){
        this.props = [];
        this.valideit;
        
     }
     
     render(){
          return new Promise(res => {
               res(`<section class="login-page">
                         <div class="login-page__leftBlock"></div>
                         <div class="login-page__form">
                              <form action="#" id="form" class="login-page__form--body" name="form">
                                   <h2>Enter your Login and Password</h2>
                                   <span class="login-page__form--message"></span>
                                   <div class="login-page__form--block">
                                        <div class="login-page__form--item">
                                             <div class="login-page__form--inputLogin">
                                                  <label for="form_login" class="login-page__form--lable">Login <span>*</span> :</label>
                                                  <input type="login" id="login" name="login" required="" minlength ="1"  value="" class="login-page__form--input ">
                                             </div>
                                             
                                             <div class="login-page__form--inputLogin">
                                                  <label for="form_password" class="login-page__form--lable">Password <span>*</span> :</label>
                                                  <input type="password" id="password1" name="password" value="" required="" minlength ="8" class="login-page__form--input">
                                             </div>
                                             
                                        </div>
                                        <div class="login-page__form--btn">
                                             <button type="submit" id="btn" class="login-page__form--btn">Login</button>
                                        </div>
                                        <div class="login-page__form--link">
                                             <a href="#">Forgot password ?</a>
                                        </div>
                                   </div>  
                              </form>
                              <h1 class="login-registration__link"><a  href="#/regForm">Create account</a></h1> 
                         </div>
                    </section>`)
          })
     }

     afterRender(){
          this.createObjField();
          this.conveyPropsToClass();
          this.handelSubmit();
          
     }
     
     handelSubmit(){
          document.getElementById('btn').addEventListener('click',(e) => {
               e.preventDefault();
               this.valideit.isValid();
               this.valideit.showNotifications();
               sendRequestToServer(stateLogin, this.props)
               console.log(stateLogin);
          }); 
         
     }

     createObjField (){
          this.props = inputsLoginForm.map(e =>  new Control(e))
          }

     conveyPropsToClass(){
               this.valideit = new ValideitForm(this.props)
     }


    


     

     
}


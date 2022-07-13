import { sendFormLoginPage } from "../../config/sendForm.js";
import { stateLogin,  USERS } from "../../helper/constants.js";
import { getValueLoginPage } from '../../config/getValueInput.js';



export default class LoginRender{
     constructor(){
        
        
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
                                             <label for="form_login" class="login-page__form--lable">Login <span>*</span> :</label>
                                             <input type="login" id="login" name="login" required="" minlength ="1"  value="" class="login-page__form--input ">
               
                                             <label for="form_password" class="login-page__form--lable">Password <span>*</span> :</label>
                                             <input type="password" id="pass" name="password" value="" required="" minlength ="8" class="login-page__form--input">
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
          document.getElementById('btn').addEventListener('click', this.handelCheck); 
     }
     

     handelCheck(e){
          e.preventDefault();
          const props = {
               login: document.getElementById('login'),
               password: document.getElementById('pass'),
               message: document.getElementsByClassName('login-page__form--message')[0],
               stateLogin: stateLogin,
               USERS: USERS,
          }
     
          getValueLoginPage(props.login, props.password, props.message, stateLogin);
          if(!props.login.required && !props.password.required) sendFormLoginPage(props.USERS, props.stateLogin, props.message);
     
          
          
     }


    


     

     
}


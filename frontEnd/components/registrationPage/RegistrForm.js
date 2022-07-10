import { stateRegistration, USERS } from "../../helper/constants.js";
import { getValueRegistrationPage } from "../../config/getValueInput.js";
import { checkEmailRegistrationPage } from '../../config/validationForm.js'
import { checkPassRegistration } from "../../config/validationForm.js";
import { getPasswordRegistrationPage } from "../../config/getValueInput.js";
import { checkFormRegistration } from "../../config/validationForm.js";
import { sendFormRegistrationPage } from "../../config/sendForm.js";
import { defaultPage, validationEmail, validPass, checkUSers } from "../../config/helpObj.js";

import Utils from '../../helper/utils.js'


export default class RegisrForm extends Utils {
     constructor(){
         super()
         this.imgObj = {
          'Male' : 'male.png',
          'Female' : 'female.png',
          'With out': 'without.png',
         }
     }
     

     render(){
          return new Promise(res => {
               res(`
               <section class="registration">
                    <div class="registration-massege"></div>
                    <form action="#" id="reg-form" class="registration-form">
                         <h2> Let's create your profile</h2>
                         <figure>
                              <img  class="registration-img" src="./img/without.png" alt="avatar">
                              <div class="registration-img-block__name">
                                   <figcaption id ="textLogin">${stateRegistration.login}</figcaption>
                                   <figcaption id ="nameText">${stateRegistration.fullName}</figcaption>
                              </div>
                             
                         </figure>
                         <div class="registration-block--name">
                              <label for="surname" class="registration-block-item">Put your Login here <mark>*</mark> : </label>
                              <input type="text" placeholder="Surname" id="surname" value="">
                         
                              <label for="name" class="registration-block-item">Put your fullname here <mark>*</mark> : </label>
                              <input type="text" placeholder="Name" id="name" value="">
                         </div>
                         <div class="registration-block-gender">
                              <label for="gender" class="registration-block-item">Choose your sex</label>
                              <select name="gender" id="gender">
                                   <option disabled selected value="Choose sex">Choose your sex</option>
                                   <option value="Male">Male</option>
                                   <option value="Female">Female</option>
                                   <option selected value="With out">Whit out</option>
                              </select>
                         </div>
                         <div class="registration-block--auth">
                              <label  for="email" class="registration-block-item">Put your email here <mark>*</mark> : </label>
                              <input class="registration-block-item" type="text" placeholder="email" id="email" value="">
                         </div>
                         <div class="registration-block-pass">
                              <div>
                                   <label class="registration-block-item" for="password">Put your password here <mark>*</mark> : </label>
                                   <input type="password" placeholder="password" id="pass1" value="">
                              </div>
                              <div>
                                   <label class="registration-block-item"for="password">Confirm your password Please! <mark>*</mark> : </label>
                                   <input type="password" placeholder=" Cofirm password" id="pass2" value="">
                              </div>
                              <span id ="message"></span>
                         </div>
                         
                         <div class="registration-block-btn">
                              <button id="btnCreate">Create</button>
                              <button id="btnCancel">Cancel</button>
                         </div>
                    </form>
                </section>`)
          })
     }

     afterRender(){
          this.handelCahge();
     }

     handelCahge(){
          const fullNameRegistration = document.getElementById('name');
          const loginRegistration = document.getElementById('surname');
          const genderRegistration = document.getElementById('gender')
          const emailRegistration = document.getElementById('email');
          const pass1Rgistration = document.getElementById('pass1');
          const pass2Registration = document.getElementById('pass2');
          const message = document.getElementById('message');
          
          document.getElementsByClassName('registration')[0].addEventListener('keyup', (e)=>{
               getValueRegistrationPage(stateRegistration, fullNameRegistration, loginRegistration, genderRegistration);
               this.renderName(e);
               this.changeImg();
               checkPassRegistration(stateRegistration, pass1Rgistration, pass2Registration, validPass );
          });

          

          document.getElementById('btnCreate').addEventListener('click', (e) => {
               e.preventDefault();
               e.stopPropagation();
               checkEmailRegistrationPage(stateRegistration, emailRegistration, validationEmail, message);
               getPasswordRegistrationPage(stateRegistration, pass1Rgistration, pass2Registration, message);
               checkFormRegistration(stateRegistration, validationEmail);
               sendFormRegistrationPage(stateRegistration, defaultPage, USERS, checkUSers); 
                
          })

          
     }

     renderName() {
        document.getElementById('textLogin').innerText =`${stateRegistration.login}`;
        document.getElementById('nameText').innerText =`${stateRegistration.fullName}`;
     }

     changeImg() {
          const img = document.getElementsByClassName('registration-img')[0];
          img.src = `./img/${this.imgObj[stateRegistration.gender]}`; 
     }



    
    



}

 

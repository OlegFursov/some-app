import { stateRegistration, USERS} from "../../helper/constants.js";
import { validationEqualityValue } from "../../config/validations.js"
import { checkValueRegistratoinPage, getValueRegistrationPage } from "../../config/getValueInput.js";
import { sendFormRegistrationPage } from "../../config/sendForm.js";
import Utils from '../../helper/utils.js'
import { allowSubmitForm } from "../../config/setValidationForm.js";


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
                    <div class="registration-container">
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
                                   <div class="registration-block--input">
                                        <label for="surname" class="registration-block-item">Put your Login here <mark>*</mark> : </label>
                                        <input type="text" required="" placeholder="Surname" id="surname" value="">
                                   </div>
                                   <div class="registration-block--input">
                                        <label for="name" class="registration-block-item">Put your fullname here <mark>*</mark> : </label>
                                        <input type="text" required="" placeholder="Name" id="name" value="">
                                   </div>
                                   <div class="registration-block--input">
                                        <label for="phone number" class="registration-block-item">Put your phone number here <mark>*</mark> : + </label>
                                        <input type="text" required="" placeholder="phone number" id="phone_number" value="">
                                   </div>
                                   <div class="registration-block--input">
                                        <label for="city" class="registration-block-item">Where are you living? <mark>*</mark> : </label>
                                        <input type="text" required="" placeholder="City" id="city" value="">
                                   </div>
                                   
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
                                   <input class="registration-block-item" required="" type="email" placeholder="email" id="email" value="">
                              </div>
                              <div class="registration-block-pass">
                                   <div>
                                        <label class="registration-block-item" for="password">Put your password here <mark>*</mark> : </label>
                                        <input type="password" required="" placeholder="password" id="pass1" value="">
                                   </div>
                                   <div>
                                        <label class="registration-block-item"for="password">Confirm your password Please! <mark>*</mark> : </label>
                                        <input type="password" required="" placeholder=" Cofirm password" id="pass2" value="">
                                   </div>
                                   <span id ="message"></span>
                              </div>
                              
                              <div class="registration-block-btn">
                                   <button type="submit" id="btnCreate">Create</button>
                                   <button id="btnCancel">Cancel</button>
                              </div>
                         </form>
                    </div>
                    
                </section>`)
          })
     }

     afterRender(){
          this.handelCahge();
     }

     handelCahge(){
          const props = {
               fullName: document.getElementById('name'),
               login: document.getElementById('surname'),
               gender: document.getElementById('gender'),
               email: document.getElementById('email'),
               phoneNumber: document.getElementById('phone_number'),
               city: document.getElementById('city'),
               password1: document.getElementById('pass1'), 
               password2: document.getElementById('pass2'),
               message: document.getElementById('message'),
          }

          props.phoneNumber.onblur = (e) => {
               e.preventDefault();
               e.stopPropagation();
               let number = props.phoneNumber.value.trim().replace(/[^0-9\w]/g, '');
               props.phoneNumber.value = number.length <= 11 ? 
               `${number.slice(0,2)} ${number.slice(2,5)} ${number.slice(5,8)} ${number.slice(8,)}`:
               `${number.slice(0,3)} ${number.slice(3,5)} ${number.slice(5,8)} ${number.slice(8,10)} ${number.slice(10,12)}`;
          }
          
          document.getElementsByClassName('registration')[0].addEventListener('keyup', (e)=>{
               this.renderName(props.login, props.fullName);
               this.changeImg(props.gender);
               validationEqualityValue(props.password1, props.password2, props.message,)
          });

          

          document.getElementById('btnCreate').addEventListener('click', (e) => {
               e.preventDefault();
               checkValueRegistratoinPage(props)
               getValueRegistrationPage();
               if(allowSubmitForm(props)) { sendFormRegistrationPage(stateRegistration, USERS) };
          })
     }

     renderName(login, name) {
        document.getElementById('textLogin').innerText =`${login.value}`;
        document.getElementById('nameText').innerText =`${name.value}`;
     }

     changeImg(gender) {
          const img = document.getElementsByClassName('registration-img')[0];
          img.src = `./img/${this.imgObj[gender.value]}`; 
     }



    
    



}

 

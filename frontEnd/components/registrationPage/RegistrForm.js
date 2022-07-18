import { Control } from "../../HelpClasses/control.js";
import { ValideitForm } from "../../HelpClasses/validateForm.js";
import { stateRegistration} from "../../helper/constants.js";
import { sendRequestToServer } from "../../helper/helper.js";
import Utils from '../../helper/utils.js'
import { inputRegistrationForm } from "./config.js";



export default class RegisrForm extends Utils {
     constructor(){
         super()
         this.imgObj = {
          'Male' : 'male.png',
          'Female' : 'female.png',
          'With out': 'without.png',
         }
         this.props = [];
         this.valideit;
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
                                        <figcaption id ="textLogin">${stateRegistration['login']}</figcaption>
                                        <figcaption id ="nameText">${stateRegistration['name']}</figcaption>
                                   </div>
                              
                              </figure>
                              <div class="registration-block--name">
                                   <div class="registration-block--input">
                                        <label for="surname" class="registration-block-item">Put your Login here <mark>*</mark> : </label>
                                        <input type="text" name ="login" required=""  placeholder="Surname" id="login" value="">
                                   </div>
                                   <div class="registration-block--input">
                                        <label for="name" class="registration-block-item">Put your fullname here <mark>*</mark> : </label>
                                        <input type="text" required="" placeholder="Name" id="name" value="">
                                   </div>
                                   <div class="registration-block--input">
                                        <label for="phone number" class="registration-block-item">Put your phone number here <mark>*</mark> : + </label>
                                        <input type="text" required="" placeholder="phone number" id="phoneNumber" value="">
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
                                   <input  required="" type="email" placeholder="email" id="email" value="">
                              </div>
                              <div class="registration-block-pass">
                                   <div>
                                        <label class="registration-block-item" for="password">Put your password here <mark>*</mark> : </label>
                                        <input type="password" required="" placeholder="password" id="password1" value="">
                                   </div>
                                   <div>
                                        <label class="registration-block-item"for="password">Confirm your password Please! <mark>*</mark> : </label>
                                        <input type="password" required="" placeholder=" Cofirm password" id="password2" value="">
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
          this.createObjField();
          this.handelCahge();
          this.handelSubmit(); 
     }

   


     //! some functions 
     handelSubmit(){
          document.getElementById('btnCreate').addEventListener('click', (e) => {
               e.preventDefault();
               this.conveyPropsToClass();
               this.valideit.isValid();
               this.valideit.showNotifications();
               // this.valideit.showMessageNotify();
               sendRequestToServer(this.props); 
          })
     }

     handelCahge(){
          document.getElementsByClassName('registration')[0].addEventListener('keyup', (e)=>{
               this.conveyPropsToClass();
               this.renderName();
               this.changeImg();
               this.valideit.inspectionSameFiled();
          
          });
     }

     renderName() {
          document.getElementById('textLogin').innerText =`${document.getElementById('login').value}`;
          document.getElementById('nameText').innerText =`${document.getElementById('name').value}`;
       }

     changeImg() {
          const img = document.getElementsByClassName('registration-img')[0];
          img.src = `./img/${this.imgObj[document.getElementById('gender').value]}`; 
     }

     filterField(array) {
        return array.filter(e => e.field.id === 'password1' || e.field.id === 'password2');
     }


     createObjField (){
     this.props = inputRegistrationForm.map(e =>  new Control(e))
     }

     conveyPropsToClass(){
          this.valideit = new ValideitForm(this.props)
     }

}

 


import { html } from "./htmlPage.js";
import { Control } from "../../HelpClasses/control.js";
import { ValidateForm } from "../../HelpClasses/validateForm.js";
import { stateRegistration, USERS} from "../../helper/constants.js";
import { sendForm } from "../../config/sendForm.js";
import { addPhoneNumberPatter, installState,findSameTypeFields, removeClassToField, addClassToField } from "../../helper/helper.js";
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
     }
     
     render(){
          return new Promise(res => res(html));
     }

     afterRender(){
          this.createObjects();
          this.installValidClassOnForm();
          this.handelCahge();
          this.handelSubmit();
     }

     //! some functions 
     createObjects (){
          this.controls = inputRegistrationForm.map(e =>  new Control(e))
     }

     installValidClassOnForm(){
          this.validate = new ValidateForm(this.controls)
     }

     handelSubmit(){
          document.getElementById('btnCreate').addEventListener('click', (e) => {
               e.preventDefault();
               this.validate.check();
               this.sendFormToServer();   
          });
     }

     handelCahge(){
          document.getElementsByClassName('registration')[0].addEventListener('keyup', (e)=>{
               this.showLoginNameOnPage();
               this.changeImg();
               addPhoneNumberPatter(document.getElementById('phoneNumber'));
               this.checkSameTypeFields();
          });
     }


     //! functions for helps
     showLoginNameOnPage() {
          document.getElementById('textLogin').innerText =`${document.getElementById('login').value}`;
          document.getElementById('nameText').innerText =`${document.getElementById('name').value}`;
       }

     changeImg() {
          const img = document.getElementsByClassName('registration-img')[0];
          img.src = `./img/${this.imgObj[document.getElementById('gender').value]}`; 
     }

     checkSameTypeFields (){ //! like a badly idea 
          const arr = findSameTypeFields(this.controls);
          arr[0].field.value == arr[1].field.value ?
          arr.forEach(control => removeClassToField(control.field, control.selector)):
          arr.forEach(control => addClassToField(control.field, control.selector));
     }

     sendFormToServer(){
          if(this.controls.every(control => control.field.required)){
               installState(stateRegistration, this.controls);
               sendForm.sendFormRegistrationPage(stateRegistration, USERS, this.controls);
          }
     }


   

}

 

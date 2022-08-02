import  html from "./registrationPage.html";
import css from "../../style/style.css";
import female from "../../img/female.png";
import male from "../../img/male.png";
import withOut from "../../img/without.png";
import { ValidateForm } from "../../HelpClasses/ValidateForm";
import { stateRegistration} from "../../helper/constants";
import { addPhoneNumberPatter, changeLocalHash, findSameTypeFields, addClassToField, removeClassToField } from "../../helper/helper";
import    Components  from "../../HelpClasses/Components";
import { inputRegistrationForm } from "./config";
import Task from "../../HelpClasses/Task";

export default class RegisrForm extends Components {
     constructor(){
         super(html);
         this.imgObj = {
          'Male' : male,
          'Female' : female,
          'With out': withOut,
         }; 
         this.task = new Task();  
     }
     
     afterRender(){
          this.createObjects();
          this.handelCahge();
          this.handelSubmit();
     }

     //! some functions 
     createObjects (){
          this.form = new ValidateForm(inputRegistrationForm, stateRegistration);
     }

     setUserLogin(state){
          this.task.setDataToArray(state);
          this.task.setIdTodata(state);
          this.task.setDataToServer(state);
          alert('Profile has created ;)')
          changeLocalHash(3);
     }

     handelSubmit(){
          document.getElementById('btnCreate').addEventListener('click', (e) => {
               e.preventDefault();
               this.form.check();
               if(this.form.isValid()){
                    this.form.setState();
                    this.setUserLogin(stateRegistration);
               }   
          });
     }

     handelCahge(){
          document.getElementsByClassName('registration')[0].addEventListener('keyup', (e)=>{
               this.showLoginNameOnPage();
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
          img.src = this.imgObj[document.getElementById('gender').value]; 
     }

     checkSameTypeFields (){ //! like a badly idea 
          const arr = findSameTypeFields(this.form.controls);
          arr[0].field.value == arr[1].field.value ?
          arr.forEach(input => removeClassToField(input.field, input.errorStyle)):
          arr.forEach(input => addClassToField(input.field, input.errorStyle));
     }
}

 

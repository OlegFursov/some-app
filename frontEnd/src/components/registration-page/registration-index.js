import  html from "./registration-page.html";
import css from "../../style/style.css";
import { ValidateForm } from "../../core/ValidateForm";
import { stateRegistrationPage} from "../../constant/constants";
import { addPhoneNumberPatter, setRoutesHash, findSameTypeFields, addClassToField, removeClassToField } from "../../helper/helper";
import    Components  from "../../core/Component";
import { inputRegistrationForm } from "./registration-config";
import Support from "../../core/Support";

export default class RegistrationPage extends Components {
     constructor(){
         super(html);
         this.key = 'User'
         this.support = new Support(this.key);
          
     }
     
     afterRender(){
          this.setVaidationToPage();
          this.handleCahge();
          this.handleSubmit();
          
     }

     //! some functions 
     getElementsWithPage(){
          this.elements = {
               form : document.getElementById('reg-form'),
               registrationField : document.getElementsByClassName('registration')[0],
               text_login : document.getElementById('textLogin'),
               text_name : document.getElementById('nameText'),
               phone_number :document.getElementById('phoneNumber')
          }
     }

     setVaidationToPage () {
          this.form = new ValidateForm(inputRegistrationForm, stateRegistrationPage);
          this.getElementsWithPage();
          
     }

     handleSubmit(){
          this.elements.form.onsubmit = (e) => {
               e.preventDefault();
               this.form.check();
               if(this.form.isValid()){
                    this.form.setState();
                    this.support.addDataToCollection(stateRegistrationPage);
                    this.support.setIdToData(stateRegistrationPage);
                    this.support.setDataToLocalStorage(stateRegistrationPage);
                    alert('profile has been created successful')
                    setRoutesHash('')
               }   
          }
     }

     handleCahge(){
          this.elements.registrationField.addEventListener('keyup', ()=>{
               this.showLoginNameOnPage();
               addPhoneNumberPatter(this.elements.phone_number);
               this.form.checkSameTypeFields (findSameTypeFields, removeClassToField, addClassToField);
          });
     }

     //! functions for helps
     showLoginNameOnPage() {
          this.elements.text_login.innerText =`${document.getElementById('login').value}`;
          this.elements.text_name.innerText =`${document.getElementById('name').value}`;
       }

}

 

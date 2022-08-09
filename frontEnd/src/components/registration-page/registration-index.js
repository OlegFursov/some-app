import  html from "./registration-page.html";
import css from "../../style/style.css";
import { ValidateForm } from "../../core/ValidateForm";
import { stateRegistrationPage} from "../../constant/constants";
import { addPhoneNumberPatter, setRoutesHash, findSameTypeFields, addClassToField, removeClassToField, manageToKeybord } from "../../helper/helper";
import    Components  from "../../core/Component";
import { inputRegistrationForm } from "./registration-config";
import Adapter from "../../core/Adapter";

export default class RegistrationPage extends Components {
     constructor(){
          super(html);     
          this.HELP_CONST ={
               key: 'User',
               _index: -1,
          }
          this.adapter = new Adapter(this.HELP_CONST.key);
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
               phone_number :document.getElementById('phoneNumber'),
               input_collection: Array.from(document.getElementsByTagName('input')),
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
                    this.adapter.addDataToCollection(stateRegistrationPage);
                    this.adapter.setIdToData(stateRegistrationPage);
                    this.adapter.setDataToLocalStorage(stateRegistrationPage);
                    alert('profile has been created successful')
                    setRoutesHash('')
               }   
          }
     }

     handleCahge(){
          document.body.addEventListener('keydown', (e) => {
               this.manageFocus(e)
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

     manageFocus (e){
          if(e.keyCode === 38 &&this.HELP_CONST._index >= 0 && this.HELP_CONST._index !== 0){
              this.HELP_CONST._index -= 1;
               manageToKeybord(this.elements.input_collection, this.HELP_CONST._index)
          }
          if(e.keyCode === 40 &&this.HELP_CONST._index !== this.elements.input_collection.length-1){
              this.HELP_CONST._index += 1;
               manageToKeybord(this.elements.input_collection,this.HELP_CONST._index)
          }
     } 
}

 

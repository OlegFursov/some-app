import { htmlPage } from "../../html.js";
import { Control } from "../../HelpClasses/control.js";
import { ValideitForm } from "../../HelpClasses/validateForm.js";
import { stateRegistration, USERS} from "../../helper/constants.js";
import { sendForm } from "../../config/sendForm.js";
import { addPatterPhoneNumber, installState } from "../../helper/helper.js";
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
         this.props;
         this.valideit;
     }
     

     render(){
          return new Promise(res => {
               res(htmlPage.formRegistrations)
          })
     }

     afterRender(){
          this.handelCahge();
          this.handelSubmit();
     }

     //! some functions 
     createObjField (){
          this.props = inputRegistrationForm.map(e =>  new Control(e))
     }

     installValidClassOnForm(){
          this.valideit = new ValideitForm(this.props)
     }

     handelSubmit(){
          document.getElementById('btnCreate').addEventListener('click', (e) => {
               e.preventDefault();
               this.createObjField();
               this.installValidClassOnForm();
               this.valideit.isValid();
               this.submitFormToServer();   
          })
     }

     handelCahge(){
          document.getElementsByClassName('registration')[0].addEventListener('keyup', (e)=>{
               this.createObjField();
               this.installValidClassOnForm();
               this.showLoginNameOnPage();
               this.changeImg();
               addPatterPhoneNumber(document.getElementById('phoneNumber'));
               this.valideit.inspectionSameFiled();
          
          });
     }

     showLoginNameOnPage() {
          document.getElementById('textLogin').innerText =`${document.getElementById('login').value}`;
          document.getElementById('nameText').innerText =`${document.getElementById('name').value}`;
       }

     changeImg() {
          const img = document.getElementsByClassName('registration-img')[0];
          img.src = `./img/${this.imgObj[document.getElementById('gender').value]}`; 
     }

     submitFormToServer(){
          if(this.valideit.isValideited){
               installState(stateRegistration,this.props);
               sendForm.sendFormRegistrationPage(stateRegistration, USERS, this.props);
          }
     }


   

}

 

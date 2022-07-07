import ValidationForm from "./validationForm.js";

export default class GetValueInput{
     constructor(){
          this.validationForm = new ValidationForm(this.state);
       
     }

     state ={
          valueLogin: '',
          valuePass: '',
          submit: false,
     }

     getValue (){
          const inputLogin = document.getElementById('forLogin');
          const inputPass = document.getElementById('forPass');
          this.state.valueLogin = inputLogin.value;
          this.state.valuePass= inputPass.value;
          this.validationForm.checkForm();
          this.state.submit = this.validationForm.allowSubmit();  
     }



}
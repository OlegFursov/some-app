import ValidationForm from "./validationForm.js";

export default class GetValueInput{
     constructor(...argument){
          this.validationForm = new ValidationForm(this.state);
          [this.inputLogin, this.inputPass, this.message] = argument;
     }

     state ={
          valueLogin: '',
          valuePass: '',
          submit: false,
     }

     getValue (){
          this.state.valueLogin = this.inputLogin.value;
          this.state.valuePass= this.inputPass.value;
          this.validationForm.checkForm(this.inputLogin, this.inputPass, this.message);
          this.state.submit = this.validationForm.allowSubmit(this.inputLogin, this.inputPass);  
     }



}
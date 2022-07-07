export default class ValidationForm {
  constructor(state){
       this.state = state;
     
  }

  checkForm(...argument){
   const [inputLogin, inputPass, message] = argument;
     if(this.state.valueLogin ===''){
       inputLogin.classList.add('error');
       message.innerText = 'Please fill both field';
     }else {
       inputLogin.classList.remove('error');
       message.innerText = ''
     }
     if( this.state.valuePass ==='' || this.state.valuePass < 8){
       inputPass.classList.add('error');
       message.innerText = 'Please fill both fields';
     }else {
       inputPass.classList.remove('error');
       message.innerText = ''
     }
  }
  
  allowSubmit(inputLogin, inputPass){
       return inputPass.className.slice(-5) === 'error' || 
                 inputLogin.className.slice(-5) === 'error' ? 
                      false : true;
  }
}
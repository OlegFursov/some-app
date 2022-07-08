

 export const checkFormLoginPage =(...argument) => {
   const [inputLogin, inputPass, message, state] = argument;
     if(state.valueLogin ===''){
       inputLogin.classList.add('error');
       message.innerText = 'Please fill both fields';
     }else {
       inputLogin.classList.remove('error');
       message.innerText = ''
     }
     if( state.valuePass ==='' || state.valuePass < 8){
       inputPass.classList.add('error');
       message.innerText = 'Please fill both fields';
     }else {
       inputPass.classList.remove('error');
       message.innerText = ''
     }
  }
  
  export const allowSubmitLoginPage = (inputLogin, inputPass, state) => {
       return state.valueLogin.length > 0 && state.valuePass.length > 0  ? true : false;
  }

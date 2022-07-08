   export const sendFormLoginPage = (inputLogin, inputPass,state) => {
          console.log(state);
               //!fetch
          inputLogin.value = '';
          inputPass.value ='';
          state.valueLogin = '';
          state.valuePass = '';
          state.submit = false;
     
     }



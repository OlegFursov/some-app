
export const checkFormLoginPage =(...argument) => {
   const [inputLogin, inputPass, message, stateLogin, validLoginPage] = argument;
      if(stateLogin.valueLogin ===''){
        validLoginPage.notValidLogin(inputLogin, message);
      }else {
        validLoginPage.validLogin(inputLogin, message);
      }
      if( stateLogin.valuePass ==='' ){
        validLoginPage.notValidLogin(inputPass, message);
      }else {
        validLoginPage.validLogin(inputPass, message);
      }
}
  
export const allowSubmitLoginPage = (stateLogin) => {
      stateLogin.submit = stateLogin.valueLogin.length > 0 && stateLogin.valuePass.length > 0 
}

export const checkEmailRegistrationPage = (stateRegistration, emailRegistration, validationEmail, message) => {
    const reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return reg.test(emailRegistration.value) && emailRegistration.value.length >= 9 ? 
        validationEmail.valid(stateRegistration, emailRegistration) : validationEmail.notValid(emailRegistration);
}

export const checkPassRegistration = (stateRegistaration ,pass1Registration, pass2Registration, validPass) => {
   return pass1Registration.value !== pass2Registration.value ? 
      validPass.notValidPass(stateRegistaration ,pass1Registration, pass2Registration, message) 
        : validPass.validPass(stateRegistaration ,pass1Registration, pass2Registration,message);
}

export const checkFormRegistration = (stateRegistaration) => {
  stateRegistaration.submit = !! stateRegistaration.login.length && !!stateRegistaration.email.length && 
  !!stateRegistaration.passValid;
}

export const checkUserLogin = (stateLogin, USERS, checkUSers) => {
  if(localStorage.key('User') == null){
    alert('Please create acaount');
  }else{
    checkUSers.getUserToServer(stateLogin, USERS);
    
  }

    
      
    
   


}




  
export const sendFormLoginPage = (stateLogin, allowSubmitLoginPage, defaultPage, checkUserLogin,  USERS, checkUSers) => {
     allowSubmitLoginPage(stateLogin);
     if(stateLogin.submit){
          checkUserLogin(stateLogin, USERS, checkUSers);
          defaultPage.defaulLoginForm(stateLogin);
     }
}

export const sendFormRegistrationPage = (stateRegistaration, defaultPage, USERS, checkUSers) => {
     if(stateRegistaration.submit){
          checkUSers.addUSersToServer(USERS, stateRegistaration);
          location.hash ='#/nextPage'

     defaultPage.defaultRegistrationForm(stateRegistaration)
     }  
}



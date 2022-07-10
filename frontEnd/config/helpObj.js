

export const validLoginPage ={
     validLogin: (inputLogin, message) => {
          inputLogin.classList.remove('error');
          message.innerText = '';
     },
     notValidLogin : (inputLogin, message) => {
          inputLogin.classList.add('error');
          message.innerText = 'Please fill both fields';
     },
     validPass: (inputPass, message) => {
          inputPass.classList.remove('error');
          message.innerText = ''
     },
     notValidPass: (inputPass, message) => {
          inputPass.classList.add('error');
          message.innerText = 'Please fill both fields';
     }
}

export const validationEmail ={
     valid: (state, email) => {
          state.email = email.value.toLowerCase();
          email.classList.remove('error');
          

     },
     notValid: (email)=>{
          email.classList.add('error');
          alert('Please fill correct email')
         
     }
}

export const validPass = {
     validPass: (state, pass1, pass2) => {
          state.passValid = true;
          pass1.classList.remove('error');
          pass2.classList.remove('error');
          message.innerText ='';

     },
     notValidPass: (state, pass1, pass2, message) => {
          state.passValid = false;
          pass1.classList.add('error');
          pass2.classList.add('error');
          message.innerText = `Password doesn't match`;
         
     }

}

export const defaultPage ={
     defaulLoginForm: (stateLogin)=>{
          stateLogin.valueLogin = '';
          stateLogin.valuePass = '';
          stateLogin.submit = false;
          
     },
     defaultRegistrationForm: (stateRegistaration) => {
          stateRegistaration.fullName = 'Full name';
          stateRegistaration.login = 'Login';
          stateRegistaration.gender = 'With out.png';
          stateRegistaration.email = '';
          stateRegistaration.password ='';
          stateRegistaration.submit = false;
          stateRegistaration.passValid = false;

     }
}

export const checkUSers ={
     addUSersToServer : (USERS, stateRegistaration) => {
          if(localStorage.key('User') == null) {
               USERS.push(stateRegistaration);
               localStorage.setItem('User', JSON.stringify(USERS));  
          }else{
               USERS = JSON.parse(localStorage.getItem('User'));
               USERS.push(stateRegistaration);
               localStorage.setItem('User', JSON.stringify(USERS));
          }
     },

     getUserToServer: (stateLogin, USERS) => {
          USERS = JSON.parse(localStorage.getItem('User'));
          const matched = USERS.filter((e) => {
               return e.login == stateLogin.valueLogin && e.password == stateLogin.valuePass;
          })
          return matched.length  ? location.hash ='#/hello': alert('Please create acaount')
          
          
     }
}
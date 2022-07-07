import GetValueInput from './components/getValueInput.js';
import SendForm from './components/sendForm.js';
import ChangeScheme from './components/changeScheme.js';

window.addEventListener('DOMContentLoaded', () => {
     //!const
     const inputLogin = document.getElementById('forLogin');
     const inputPass = document.getElementById('forPass');
     const message = document.getElementsByClassName('loginPage__form--message')[0];
     const getValueInput = new GetValueInput(inputLogin, inputPass, message);
     const sendForm = new SendForm(getValueInput.state);
     const changeScheme = new ChangeScheme();
     
     //! EventListener
     document.getElementById('btn').addEventListener('click', checkUser);

     //!Main functions
     function checkUser(e){
          e.preventDefault();
          getValueInput.getValue();

          if(getValueInput.state.submit){
               sendForm.sendForm(inputLogin, inputPass);
          }
          
     }

     changeScheme.chageScheme();
     
})
export default class ValidationForm {
     constructor(state){
          this.state = state;
        
     }

     checkForm(){
        if(this.state.valueLogin ===''){
          document.getElementById('forLogin').classList.add('error');
          document.getElementsByClassName('loginPage__form--message')[0].innerText = 'Please fill both field';
        }else {
          document.getElementById('forLogin').classList.remove('error');
          document.getElementsByClassName('loginPage__form--message')[0].innerText = ''
        }
        if( this.state.valuePass ==='' || this.state.valuePass < 8){
          document.getElementById('forPass').classList.add('error');
          document.getElementsByClassName('loginPage__form--message')[0].innerText = 'Please fill both field';
        }else {
          document.getElementById('forPass').classList.remove('error');
          document.getElementsByClassName('loginPage__form--message')[0].innerText = ''
        }
     }
     
     allowSubmit(){
          return document.getElementById('forPass').className.slice(-5) === 'error' || 
                     document.getElementById('forLogin').className.slice(-5) === 'error' ? 
                         false : true;
     }
}
export default class sendForm{
     constructor(state){
          this.state = state;
     }

     sendForm(inputLogin, inputPass){
          console.log(this.state);
               //!fetch
          inputLogin.value = '';
          inputPass.value ='';
          this.state.valueLogin = '';
          this.state.valuePass = '';
          this.state.submit = false;
          // console.log('after sended', this.state);
     }


}
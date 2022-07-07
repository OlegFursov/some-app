export default class sendForm{
     constructor(state){
          this.state = state;
     }

     sendForm(){
     console.log(this.state);
          //!fetch
     document.getElementById('forLogin').value = '';
     document.getElementById('forPass').value ='';
     this.state.valueLogin = '';
     this.state.valuePass = '';
     this.state.submit = false;
     // console.log('after sended', this.state);
     }


}
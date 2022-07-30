import { Routes } from "../index";
import { stateLogin, stateRegistration} from "../helper/constants";
import { changeLocalHash } from "../helper/helper";



export default class Task {
     constructor(){
          this.USERS = JSON.parse(localStorage.getItem('User')) ?? [];
         
         
     }


     setUserLogin(state){
          this.setIdToUsers(state)
          this.setUserToArray(state);
          this.setUserToServer(state);
          alert('Profile has created ;)')
          changeLocalHash(3);
     }

     setUserToServer(state){
          localStorage.setItem('User', JSON.stringify(this.USERS || state));
          
     }

     isAuthorized(){
          return this.USERS.find(element => element.password1 === stateLogin.password1 && element.login === stateLogin.login);
     }

     setUserToArray(state){
          this.USERS.push(state);
     }

     checkUser(){
         return this.isAuthorized() ? changeLocalHash(3) : alert ('Please create account!')
     }

     setIdToUsers(state){
          state.id = this.USERS.length;
     }


}
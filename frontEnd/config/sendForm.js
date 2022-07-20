
import { Routes } from "../index.js";



const findUSersInList = (state, USERS) => {
     return JSON.parse(localStorage.getItem('User')).every(e => state.login === e.login && state.pasword1 === e.pasword1)
}

const checkUser = (state, USERS) => {
     return findUSersInList(state, USERS)? 
          location.hash = `#/${Routes[3].hash}`: 
          alert('Please create account')
}

export const sendForm ={
     sendFormLoginPage : (USERS, state) => {
          checkUser(state, USERS);
     },
     sendFormRegistrationPage : (state, USERS, props) => {
          if(localStorage.key('User') !== null){
               USERS = JSON.parse(localStorage.getItem('User'))
               USERS.push(state);
               localStorage.setItem('User', JSON.stringify(USERS));
               location.hash = `#/${Routes[2].hash}`;
               return
          }
          USERS.push(state);
          localStorage.setItem('User', JSON.stringify(USERS));
          location.hash = `#/${Routes[2].hash}`;
          
          // defaultState.defaultState(props);
     }

}




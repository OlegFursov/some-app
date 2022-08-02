import { Routes } from "../index";





export default class Task {
     constructor(){
          this.data = JSON.parse(localStorage.getItem('User')) ?? [];
     }

     setDataToServer(state){
          localStorage.setItem('User', JSON.stringify(this.data || state));
     }

     setDataToArray(state){
          this.data.push(state);
     }

     setIdTodata(state){
          this.data.map((item)=> {
            state.id = Math.random()*(0,10000000)+100000000; 
          })
       }


}
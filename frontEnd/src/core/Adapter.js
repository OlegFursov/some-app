import { Routes } from "../index";
import { MAX_VALUE_ID, MIN_VALUE_ID } from "../constant/constants";

export default class Adapter {
     constructor(...argument){
        const [key]= argument;
          this.key = key;
          this.data = JSON.parse(localStorage.getItem(`${this.key}`)) ?? [];
     }

     setDataToLocalStorage(state){
          localStorage.setItem(this.key, JSON.stringify(this.data || state));
     }

     addDataToCollection(state){
          this.data.push(state);
     }

     setIdToData(state){
          this.data.map((item)=> {
            state.id = Math.random()*(MIN_VALUE_ID, MAX_VALUE_ID)+MAX_VALUE_ID; 
          })
       }


}
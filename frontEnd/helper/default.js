import { stateRegistration } from "./constants.js";

export const defaultState = {
     defaultState : (props) => {
          props.forEach(element => {if( element.field.id !== 'gender')  element.field.value = ''} );
     }

     
}
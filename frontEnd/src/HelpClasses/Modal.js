import { addClassToField, removeClassToField } from "../helper/helper";

const NAME_MODAL_CLASS = 'modal';
const MODAL_SHOW = 'modal_show';

export default class Modal {
     constructor(element, config){
          this._element = element;
          this._config = config; 
        
     }

     _showModal(){
          addClassToField(this._element, MODAL_SHOW);  
     }

     _hiddenModal(){
         removeClassToField(this._element, MODAL_SHOW);
     }


     _renderInfoIntoModal(){
          this._config.modalRoot.innerHTML = this._config.infoToModalRender();
          
     }
       
}
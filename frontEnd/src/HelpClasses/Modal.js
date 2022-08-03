import { addClassToField, removeClassToField } from "../helper/helper";
const MODAL_ID = 'staticBackdrop';
const MODAL_SHOW = 'modal_show';
const KEY_CODE = 27;
const MODAL_CONTENT = 'modal-info';
export default class Modal {
     constructor(config){
          this._element =  document.getElementById(MODAL_ID);
          this._config = config; 
          this._addEventListner= this._addEventListner();
     }


     _showModal(){  
          addClassToField(this._element, MODAL_SHOW);
          
          
     }

     _hiddenModal(){
         removeClassToField(this._element, MODAL_SHOW); 
     }

     _renderInfoIntoModal(){
          this._config.modalRoot.innerHTML = this._config.infoToModalRender(); 
          this._setScrollToModal(); 
     }

     _setScrollToModal(){
        if(this._config.modalRoot.clientHeight <= document.querySelector(`.${MODAL_CONTENT}`).clientHeight){
               this._config.modalRoot.style.overflowY = 'auto';
        }
     }

     _addEventListner(){  
        document.body.addEventListener('keyup', (e)=> {if(e.keyCode === KEY_CODE)this._hiddenModal()}) //! it's working like requred)
     }

     
     _setAssesabilityAtributtes(acsessability){
          this._element.ariaModal = !acsessability;
          this._element.hidden = acsessability;
          this._element.ariaLabel = 'modal'
          this._element.autofocus = acsessability;
     }
       
}
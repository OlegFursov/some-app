import { filterList } from "../helper/helper";

export default class Modal {
     constructor(...argument){
          const [setModal, USERS] = argument
          this.setModal = setModal;
          this.USERS = USERS;
          this.userObject;
          this.modalObject;
     }

     setUserObject(getUserFromList){
          this.userObject = getUserFromList;
     }

     renderModal(item, id){
          document.getElementById(`${id}`).insertAdjacentHTML('afterend', this.setModal(item))
     }

     removeModal(modalSelector){
         document.getElementsByClassName(`${modalSelector}`)[0].outerHTML = '';
     }

     getFieldsFromModal(tagsSelector){
         return document.querySelectorAll(`.${tagsSelector}`)  
     }

     editFieldsFromModal(tagsSelector){
          this.getFieldsFromModal(tagsSelector).forEach(input => input.disabled = false); 
     }

     confirmChangeInfo(tagsSelector){
          this.getFieldsFromModal(tagsSelector).forEach((input) => {
          this.userObject[input.name] = input.value.toLowerCase();
          return input.disabled = true;
         })
     }

     setUserList(USERS){
          USERS = filterList(this.userObject.id, USERS);
     }   
}
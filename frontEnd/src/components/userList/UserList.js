import Components from "../../HelpClasses/Components";
import userListPage from "./userListPage.html";
import css from "./userList.css";
import Task from "../../HelpClasses/Task";
import { setIsAuthorized, setIsNotAuthorizedUser, installText, setModal, setButtonToModal } from "./install";
import Modal from "../../HelpClasses/Modal";
import { getAttributId, getUserFromList, filterList } from "../../helper/helper";




export default class UserList extends Components{
     constructor(){
          super(userListPage)
          this.id = 'table';
          this.task = new Task();
          this.modal = new Modal(setModal, this.task.USERS, this.id);
          this.isAuthorized = this.task.isAuthorized();
     }

     afterRender(){
        this.renderUserList();
        this.handelChange();
     }

     renderUserList(){
          document.getElementsByClassName('user-list_message')[0].innerText = this.setMessageText() ;
          document.getElementsByClassName('user-list-link')[0].innerText = this.setLogButtonText();
          document.getElementById(`${this.id}`).innerHTML = this.task.USERS.map((item, index)=> this.isUserAuthrized(item, index)).join(' ');
     }

     isUserAuthrized(item, index){
         return this.isAuthorized ? setIsAuthorized(item, index) : setIsNotAuthorizedUser(item, index);
     }

     setLogButtonText(){
         return this.isAuthorized ? installText('Log Out') : installText('Sing in');
     }
     
     setMessageText(){
          return this.task.USERS.length ? installText(`User list has ${this.task.USERS.length} items`) :installText('User list is empty, click on Create account')
     }

     setButtonAtModal(){
          return this.isAuthorized ? 
          document.getElementsByClassName('user-modal-btn')[0].innerHTML = installText(setButtonToModal()) :
          document.getElementsByClassName('user-modal-btn')[0].innerHTML = installText('');
     }

     removeUsersfromList(id){
          this.task.USERS = filterList(id, this.task.USERS);
          return this.task.USERS;
     }

     handelChange(){
          document.getElementsByClassName('user-list')[0].addEventListener('click', (e)=> {
               switch(e.target.name){
                    case 'view' :
                         this.modal.renderModal(getUserFromList(getAttributId(e.target.id), this.task.USERS), this.id);
                         this.setButtonAtModal();
                         this.modal.setUserObject(getUserFromList(getAttributId(e.target.id), this.task.USERS));
                         break;
                    case 'close': 
                         this.modal.removeModal('user-modal');
                         break;
                    case 'delete': 
                         this.removeUsersfromList(getAttributId(e.target.id));
                         this.renderUserList();
                         // this.task.setUserToServer(this.task.USERS)
                         break;
                    case 'edit':
                         this.modal.editFieldsFromModal('user-modal-input');
                         break;
                    case 'confirm' :
                         this.modal.confirmChangeInfo('user-modal-input');
                         this.modal.setUserList(this.task.USERS)
                         this.modal.removeModal('user-modal');
                         this.task.setUserToServer(this.task.USERS);
                         this.renderUserList();
                         break;
               }
          })
     }

     



}
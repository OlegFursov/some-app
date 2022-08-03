import Components from "../../HelpClasses/Components";
import userListPage from "./userListPage.html";
import css from "./userList.css";
import Task from "../../HelpClasses/Task";
import { setHTML, setHTMLforModal} from "./install";
import Modal from "../../HelpClasses/Modal";
import { getAttributId, findItemToList, filterList, addClassToField, installText} from "../../helper/helper";
import LoginRender from "../loginPage/LoginRender";




export default class UserList extends Components{
     constructor(){
          super(userListPage)
          this.acsessability = true;
          this.task = new Task();
          this.login = new LoginRender();
          this.isAuthorized = this.login.isAuthorized();
          //!actions
          this.actions ={
               view: (e)=>{
                    this.setUserObject(findItemToList(getAttributId(e.target.id), this.task.data));
                    this.setAcsessability();
                    this.modal._showModal();
                    this.setButtonAtModal();
                    this.modal._setAssesabilityAtributtes(this.acsessability);
                    this.modal._renderInfoIntoModal();    
               },
               close: ()=> {
                    this.setAcsessability();
                    this.modal._hiddenModal();
                    this.modal._setAssesabilityAtributtes(this.acsessability);
               },
               delete: (e)=> {
                    this.removeDatafromList(getAttributId(e.target.id));
                    this.renderUserList();
               },
               edit: ()=> {
                    this.editFieldsFromModal();
                    this.showVisualChange();
               },
               confirm: ()=> {
                    this.confirmChangeInfo();
                    this.renderUserList();
                    this.task.setDataToServer(this.task.data);
                    this.modal._hiddenModal();
               }        
          } 
          
     }

     afterRender(){ 
        this.renderUserList();
        this.isUserAuthrized();
        this.handelChange();
        this.setConfigToModal();
        this.setModalElement();   
     }

     //!config

     setUserObject(findItemToList){
          this.users = findItemToList;
     }

     setModalElement(){
          this.modal = new Modal(this.config);
     }

     setConfigToModal(){
          this.config = {
               infoToModalRender:() => setHTMLforModal(this.users),
               modalRoot: document.getElementsByClassName('modal-body')[0],
               
              
          } 
     }

     renderUserList(){
          document.getElementsByClassName('user-list_message')[0].innerText = this.setMessageText() ;
          document.getElementsByClassName('user-list-link')[0].innerText = this.setLogButtonText();
          document.getElementById('table').innerHTML = setHTML(this.task.data)
     }



     //!logics
     isUserAuthrized(){
        if(!this.isAuthorized) Array.from(document.getElementsByClassName('user-block-btn')).map(element => element.children.delete.hidden = true);
     }

     setLogButtonText(){
         return this.isAuthorized ? installText('Log Out') : installText('Sing in');
     }
     
     setMessageText(){
          return this.task.data.length ? installText(`User list has ${this.task.data.length} items`) :installText('User list is empty, click on Create account')
     }

     setUserList(dataBase){
          this.task.data = filterList(this.users.id, dataBase);
     } 

     setButtonAtModal(){
         !this.isAuthorized ?  
         document.getElementById('isAuthorized_change-block').style.display='none':
         document.getElementById('isAuthorized_change-block').style.display='flex';   
     }

     getFieldsFromModal(){
         return Array.from(document.getElementsByTagName('input'))
     }

     editFieldsFromModal(){
          this.getFieldsFromModal().forEach(field => field.disabled = false); 
     }

     removeDatafromList(id){
          this.task.data = filterList(id, this.task.data);
          return this.task.data;
     }

     confirmChangeInfo(){
          this.getFieldsFromModal().forEach((input) => {
               this.users[input.name] = input.value.toLowerCase();
               return input.disabled = true;
         })
     }
     
    showVisualChange(){
          this.getFieldsFromModal().forEach(field => addClassToField(field, 'active-inputs'))
    }


    setAcsessability(){
     if(this.acsessability){
          this.acsessability = false; 
     }else{
          this.acsessability = true;
     }
     
    }


    //!handelChange
     handelChange(){
          document.getElementsByClassName('user-list')[0].addEventListener('click', (e)=> { 
              try{
                    this.actions[e.target.name](e)
              }catch(e){
                    console.log('has cliced over the fields');  
              }
          })
     }
}
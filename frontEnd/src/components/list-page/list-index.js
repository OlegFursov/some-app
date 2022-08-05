import Components from "../../core/Component";
import listPage from "./list-page.html";
import style from "./list-style.css";
import Support from "../../core/Support";
import { setHTML, setHTMLforModal} from "./list-config";
import Modal from "../../core/Modal";
import { getAttributId, findItemToList, filterList, addClassToField, installText} from "../../helper/helper";
import LoginPage from "../login-page/login-index";




export default class ListPage extends Components{
     constructor(){
          super(listPage)
          this.key = 'User'
          this.acsessability = true;
          this.support = new Support(this.key);
          this.login = new LoginPage();
          this.isAuthorized = this.login.isAuthorized();
          //!actions
          this.actions ={
               view: (e)=>{
                    this.setUserObject(findItemToList(getAttributId(e.target.id), this.support.data));
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
                    this.support.setDataToLocalStorage(this.support.data);
                    this.modal._hiddenModal();
               }        
          } 
          
     }

     afterRender(){ 
          this.getElementsWithPage()
          this.renderUserList();
          this.isUserAuthrized();
          this.handleChange();
          this.setConfigToModal();
          this.setModalElement();   
     }

     //!config

     getElementsWithPage(){
          this.elements = {
               table : document.getElementById('table'),
               link : document.getElementsByClassName('user-list-link')[0],
               message: document.getElementsByClassName('user-list_message')[0]
          }
     }

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
          this.elements.message.innerText = this.setMessageText() ;
          this.elements.link.innerText = this.setLogButtonText();
          this.elements.table.innerHTML = setHTML(this.support.data)
     }



     //!logics
     isUserAuthrized(){
        if(!this.isAuthorized) Array.from(document.getElementsByClassName('user-block-btn')).map(element => element.children.delete.hidden = true);
     }

     setLogButtonText(){
         return this.isAuthorized ? installText('Log Out') : installText('Sing in');
     }
     
     setMessageText(){
          return this.support.data.length ? installText(`User list has ${this.support.data.length} items`) :installText('User list is empty, click on Create account')
     }

     setUserList(dataBase){
          this.support.data = filterList(this.users.id, dataBase);
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
          this.support.data = filterList(id, this.support.data);
          return this.support.data;
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


    //!handleChange
     handleChange(){
          document.getElementsByClassName('user-list')[0].addEventListener('click', (e)=> { 
              try{
                    this.actions[e.target.name](e)
              }catch(e){
                    console.log('has cliced over the fields');  
              }
          })
     }
}
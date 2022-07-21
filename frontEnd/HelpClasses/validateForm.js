export class ValidateForm {
     constructor(props){
          this.controls = props;
     }

     // checkFormBeforeSubmit(){
     //      return this.controls.every(control => control.isValid())
     // }

     check(){
          this.controls.forEach(control =>{
               if(!control.isValid()){
                    control.removeRequired();
                    control.showError();
                    return;
               }
               control.setRequired();
               control.hideError();
               
          });
     }

    
    



     
          



    
}
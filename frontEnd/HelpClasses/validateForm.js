export class ValidateForm {
     constructor(props){
          this.controls = props;
          this.isValidated = false;
     }

     installNotifications (){
          this.controls.forEach(control =>{
               if(control.isValid()){
                    this.isValidated = true
                    control.hideError();
               }else{
                    this.isValidated = false;
                    control.showError();
               }
          })  
     }

     check(){
          this.installNotifications();   
     }

    
    



     
          



    
}
export class ValidateForm {
     constructor(props){
          this.controls = props;
     }

     installNotifications (){
          this.controls.forEach(control =>{
               if(!control.isValid()){
                    control.field.required = false;
                    control.showError();
               }else{
                    control.field.required = true;
                    control.hideError();
               }
          })  
     }

     check(){
          this.installNotifications();   
     }

    
    



     
          



    
}
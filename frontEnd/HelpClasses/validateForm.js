export class ValideitForm {
     constructor(props){
          this.props = props;
        
     }
     
     isValid(){
          
          this.props.forEach(element =>{
               if(element.type === 'simpleField'){ 
                   element.isValid = element.validated(element.field.value)
               }
               if(element.type === 'specialField'){ 
                    element.isValid = element.validated(element.regex, element.field.value)
               }
          })

     }

     showNotifications(){
          this.props.forEach(element => element.isValid ? element.field.classList.remove(`${element.selector}`) : element.field.classList.add(`${element.selector}`))
     }

     // showMessageNotify(){
     //      console.log(this.props);
     //      this.props.forEach(element => {
     //           if(!element.isValid){
     //                console.log(element.textError);
     //           element.messageField.innerText = `${element.textError}`
     //           }else{
     //           element.messageField.innerText= element.textError; 
     //           }})
           
     // }

     filterSameFields (){
          return this.props.filter(e => /password/g.test(e.field.id)) 
     }

     inspectionSameFiled(){
          const arr = this.filterSameFields();
          arr[0].field.value === arr[1].field.value ? 
          arr.forEach(e => e.field.classList.remove(`${e.selector}`)) : 
          arr.forEach(e => e.field.classList.add(`${e.selector}`))
     }
}
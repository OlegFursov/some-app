import { showNotifications, equalSameInputs, filterSameInputFromControl, showErrorText} from "../helper/helper.js";
import { findSameFields } from "../helper/helper.js";
import { isValidFormInput } from "../config/validators.js";

export class ValideitForm {
     constructor(props){
          this.props = props;
          this.isValid;
          this.inputName = findSameFields(this.props);;
     }

     setPropertis(){
         this.isValideited = this.props.every(e => e.isValid)
     }

     inspectionSameFiled(){
          equalSameInputs(this.props, this.inputName);
          showNotifications(filterSameInputFromControl(this.props, this.inputName));
          showErrorText(filterSameInputFromControl(this.props, this.inputName));
         
     }

     isValid(){
          isValidFormInput(this.props);
          this.setPropertis();
          showNotifications(this.props);
          showErrorText(this.props)
     }

    
    



     
          



    
}
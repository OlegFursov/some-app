import Components from "../../core/Component";
import html from "./next-page.html";
import style from "./style.css";



export default class NextPage extends Components{
     constructor(){
          super(html)
          
         
     }

     afterRender(){
          this.handleChange()
     }
   
      handleChange()  {
          document.getElementsByClassName('next-page_squer')[0].addEventListener('click', (e) => {
               e.target.classList.toggle('toggel')
          }) 
     }

}

     
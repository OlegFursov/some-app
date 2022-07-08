import { parseRequestURL}  from './helper/helper.js';
import { changeScheme } from './config/changeScheme.js';
import RegisrForm from './components/registrationPage/RegistrForm.js';
import LoginRender from './components/loginPage/LoginRender.js';
import Error from './components/error/Error.js'

window.addEventListener('DOMContentLoaded', () => {
     //* const
     const root = document.getElementById('root');
    

     //*routes
     const Routes ={
          '': LoginRender,
          'regForm': RegisrForm,

     }

     function router(){
          const parseURL = `${parseRequestURL().resorse || ''}`;
          const page = Routes[parseURL] ? new Routes[parseURL] : new Error();
          page.render().then(html => {
               root.innerHTML = html;
               page.afterRender();  
          })

     }
     
    
     router()
     changeScheme();
     window.addEventListener('hashchange', router)
    
     
})
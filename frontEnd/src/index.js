import { parseRequestURL}  from './helper/helper.js';
import { changeScheme } from './config/changeScheme.js';
import RegisrForm from './components/registrationPage/RegistrForm.js';
import LoginRender from './components/loginPage/LoginRender.js';
import Error from './components/error/Error.js';
import UserList from './components/userList/UserList.js';
import NextPage from './components/nextPage/nextPage.js';



//!global const
export const Routes =[
     {hash: 'loginPage', class: LoginRender, pageLogin: 0},
     {hash: 'regForm', class: RegisrForm, pageRegistrForm: 1},
     {hash: 'nextPage', class: NextPage, pageNextPage: 2},
     {hash: '', class: UserList, pageUserList: 3},
]

window.addEventListener('DOMContentLoaded', () => {
     //* const
     const root = document.getElementById('root');
     
     function router(){
          const parseURL = `${parseRequestURL().resorse || ''}`;
          const Url = Routes.find(e => e.hash === parseURL);
          const page = Url ? new Url.class: new Error();
          page.render().then(html => {
               root.innerHTML = html;
               page.afterRender();  

          })
     }
     
    
     router()
     changeScheme();
     window.addEventListener('hashchange', router)
    
     
})
import { parseRequestURL}  from './helper/helper.js';
import { changeScheme } from './config/config-change-scheme.js';
import { Routes } from './routers/Routers';


//!global const


window.addEventListener('DOMContentLoaded', () => {
     //* const
     const root = document.getElementById('root');
     
     function router(){
          const parseURL = `${parseRequestURL().resorse || ''}`;
          const Url = Routes().find(e => e.hash === parseURL);
          const page = Url ? new Url.class : new Routes().find(router => router.hash === 'error' );
          page.render().then(html => {
               root.innerHTML = html;
               page.afterRender();  
          })
     }
     
    
     router()
     changeScheme();
     window.addEventListener('hashchange', router)
    
     
})
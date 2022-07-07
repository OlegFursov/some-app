export default class ChangeScheme{
    
     preferScheme = window.matchMedia('(prefers-color-scheme: dark');

     chageScheme(){
          return this.preferScheme.matches ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
     }



}
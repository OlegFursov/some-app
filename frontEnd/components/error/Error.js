export default class Error404{
     constructor() {
          
     }
     render(){
          return new Promise(res => {
               res(`
               <section class="page-error">
                    <h1 class="page-error-message">I'm Sorry but that page doesn't avable </h1>
               </section>
               `)
          })
     }
     afterRender(){}
     

}
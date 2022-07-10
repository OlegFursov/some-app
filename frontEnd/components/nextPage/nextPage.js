export default class NextPage{
     constructor(){

     }

     render(){
          return new Promise(res => {
               res(`
               <section>
                    <h1 class="next">Your account has been create Successful !!! :)</h1>
               </section>`)
          })
     }
     afterRender(){}
}

export default class HelloPage{
     constructor(){

     }

     render(){
          return new Promise(res => {
               res(`
                    <section>
                         <h1 class ="hello">Hello </h1>
                    </section>
               `)
          })
     }

     afterRender(){}
}
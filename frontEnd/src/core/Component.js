export default class Components {
     constructor (html){
          this.html = html;
     }

     render(){
          return new Promise(result => result(this.html))
     }

    

}
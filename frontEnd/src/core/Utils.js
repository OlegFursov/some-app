import {parseRequestURL} from '../helper/helper'

export default class Utils{
     constructor(){
          this.request = parseRequestURL();

     }

     getResponse(){
          return new Promise(res => res());
     }

     afterRender(){}
}
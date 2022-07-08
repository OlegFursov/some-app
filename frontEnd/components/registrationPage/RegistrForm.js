

export default class RegisrForm {
     constructor(){
          this.state = {};
     }

     render(){
          return new Promise(res => {
               res(`
               <section class="registration">
                    <div class="registration-massege"></div>
                    <form action="#" id="reg-form" class="registration-form">
                         <h2> Let's create your profile</h2>
                         <figure>
                              <img  class="registration-img" src="./img/male.jpg" alt="avatar">
                              <figcaption>Name Surname</figcaption>
                         </figure>
                         <div class="registration-block--name">
                              <label for="name" class="registration-block-item">Put your Name here <mark>*</mark> : </label>
                              <input type="text" placeholder="Name" id="name" value="">

                              <label for="surname" class="registration-block-item">Put your Surname here <mark>*</mark> : </label>
                              <input type="text" placeholder="Surname" id="surname" value="">
                         </div>
                         <div class="registration-block-gender">
                              <label for="gender" class="registration-block-item">Choose your sex <mark>*</mark> :</label>
                              <select name="gender" id="gender">
                                   <option disabled selected value="Choose sex">Choose your sex</option>
                                   <option value="Male">Male</option>
                                   <option value="Female">Female</option>
                                   <option value="WithOut">Don't have choese</option>
                              </select>
                         </div>
                         <div class="registration-block--auth">
                              <label  for="email" class="registration-block-item">Put your email here <mark>*</mark> : </label>
                              <input class="registration-block-item" type="text" placeholder="email" id="email" value="">
                         </div>
                         <div class="registration-block-pass">
                              <div>
                                   <label class="registration-block-item" for="password">Put your password here <mark>*</mark> : </label>
                                   <input type="password" placeholder="password" id="pass1" value="">
                              </div>
                              <div>
                                   <label class="registration-block-item"for="password">Confirm your password Please! <mark>*</mark> : </label>
                                   <input type="password" placeholder=" Cofirm password" id="pass2" value="">
                              </div>
                         </div>
                         <div class="registration-block-btn">
                              <button id="btnCreate">Create</button>
                              <button id="btnCancel">Cancel</button>
                         </div>
                    </form>
                </section>`)
          })
     }

     afterRender(){}
}
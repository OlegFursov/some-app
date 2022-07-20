export const htmlPage ={
     formRegistrations : `
                         <section class="registration">
                              <div class="registration-massege"></div>
                              <div class="registration-container">
                                   <form action="#" id="reg-form" class="registration-form">
                                        <h2> Let's create your profile</h2>
                                        <figure>
                                             <img  class="registration-img" src="./img/without.png" alt="avatar">
                                             <div class="registration-img-block__name">
                                                  <figcaption id ="textLogin">Login</figcaption>
                                                  <figcaption id ="nameText">Full name</figcaption>
                                             </div>
                                        
                                        </figure>
                                        <div class="registration-block--name">
                                             <div class="registration-block--input">
                                                  <label for="surname" class="registration-block-item">Put your Login here <mark>*</mark> : </label>
                                                  <input type="text" name ="login" name="login" required=""  placeholder="Surname" id="login" value="">
                                                  
                                             </div>
                                             <span id="errorPlace-login"></span>
                                             <div class="registration-block--input">
                                                  <label for="name" class="registration-block-item">Put your fullname here <mark>*</mark> : </label>
                                                  <input type="text" name="name" required="" placeholder="Name" id="name" value="">
                                                 
                                             </div>
                                             <span id="errorPlace-name"></span>
                                             <div class="registration-block--input">
                                                  <label for="phone number" class="registration-block-item">Put your phone number here <mark>*</mark> : + </label>
                                                  <input type="text" name="phoneNumber" required="" placeholder="phone number" id="phoneNumber" value="">
                                                  
                                             </div>
                                             <span id="errorPlace-phoneNumber"></span>
                                             <div class="registration-block--input">
                                                  <label for="city" class="registration-block-item">Where are you living? <mark>*</mark> : </label>
                                                  <input type="text" name="city" required="" placeholder="City" id="city" value="">
                                                 
                                             </div>
                                             <span id="errorPlace-city"></span>
                                             
                                        </div>
                                        <div class="registration-block-gender">
                                             <label for="gender" class="registration-block-item">Choose your sex</label>
                                             <select name="gender" id="gender">
                                                  <option disabled selected value="Choose sex">Choose your sex</option>
                                                  <option value="Male">Male</option>
                                                  <option value="Female">Female</option>
                                                  <option selected value="With out">Whit out</option>
                                             </select>
                                             <span id="errorPlace-gender"></span>
                                        </div>
                                       
                                        <div class="registration-block--auth">
                                             <label  for="email" class="registration-block-item">Put your email here <mark>*</mark> : </label>
                                             <input  required="" type="email" name="email" placeholder="email" id="email" value="">
                                            
                                        </div>
                                        <span id="errorPlace-email"></span>
                                        <div class="registration-block-pass">
                                             <div>
                                                  <label class="registration-block-item" for="password">Put your password here <mark>*</mark> : </label>
                                                  <input type="password" name="password" required="" placeholder="password" id="password1" value="">
                              
                                             </div>
                                             <span id="errorPlace-password1"></span>
                                             <div>
                                                  <label class="registration-block-item"for="password">Confirm your password Please! <mark>*</mark> : </label>
                                                  <input type="password" name="password" required="" placeholder=" Cofirm password" id="password2" value="">
                                            
                                             </div>
                                             <span id ="errorPlace-password2"></span>
                                        </div>
                                        
                                        <div class="registration-block-btn">
                                             <button type="submit" id="btnCreate">Create</button>
                                             <button id="btnCancel">Cancel</button>
                                        </div>
                                   </form>
                              </div>
                              
                         </section>`,
     formLoginPage: `<section class="login-page">
                         <div class="login-page__leftBlock"></div>
                         <div class="login-page__form">
                              <form action="#" id="form" class="login-page__form--body" name="form">
                                   <h2>Enter your Login and Password</h2>
                                   <span></span>
                                   <div class="login-page__form--block">
                                        <div class="login-page__form--item">
                                             <div class="login-page__form--inputLogin">
                                                  <label for="form_login" class="login-page__form--lable">Login <span>*</span> :</label>
                                                  <input type="login" id="login" name="login" required="" minlength ="1"  value="" class="login-page__form--input ">
                                             </div>
                                             <span id ="errorPlace-LoginForm"></span>
                                             <div class="login-page__form--inputLogin">
                                                  <label for="form_password" class="login-page__form--lable">Password <span>*</span> :</label>
                                                  <input type="password" id="password1" name="password" value="" required="" minlength ="8" class="login-page__form--input">
                                             </div>
                                             <span id ="errorPlace-passwordLoginForm"></span>
                                        </div>
                                        <div class="login-page__form--btn">
                                             <button type="submit" id="btn" class="login-page__form--btn">Login</button>
                                        </div>
                                        <div class="login-page__form--link">
                                             <a href="#">Forgot password ?</a>
                                        </div>
                                   </div>  
                              </form>
                              <h1 class="login-registration__link"><a  href="#/regForm">Create account</a></h1> 
                         </div>
                    </section>`,
}
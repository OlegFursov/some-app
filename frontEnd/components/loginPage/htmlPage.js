export const html = `<section class="login-page">
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
</section>`;
import LoginPage from "../components/login-page/login-index";
import RegistrationPage from "../components/registration-page/registration-index";
import NextPage from "../components/next-page/next-page";
import ListPage from "../components/list-page/list-index";
import Error from "../error/error-page";

export const Routes = ()=>{
     return [
          {hash: 'loginPage', class: LoginPage},
          {hash: 'regForm', class: RegistrationPage},
          {hash: 'nextPage', class: NextPage},
          {hash: '', class: ListPage},
          {hash: 'error', class: Error}
     ]
}
export const getValueLoginPage = (...argument) =>{
     const [state, inputLogin, inputPass] = argument;
     state.valueLogin = inputLogin.value.toLowerCase();
     state.valuePass= inputPass.value; 
    
}
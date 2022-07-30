export const setIsAuthorized = (item, index) => {
   return ` 
     <tr>
          <td>
               <div class="user-list__row">
                    <div>
                         <h3>${index+1}. ${item.login.toUpperCase()}</h3>
                         <span class="user-list__name">${item.name.toUpperCase()} </span>
                    </div>
                    <div class="user-block-btn">
                         <button  id="user-delete ${item.id}" name="delete">Delete</button>
                         <button  id="user-view ${item.id}" name="view">View</button>
                    </div>
               </div>
          </td>
     </tr>`;
    
}

export const setIsNotAuthorizedUser = (item, index) => {
     return ` 
          <tr>
               <td>
                    <div class="user-list__row">
                         <div>
                              <h3>${index+1}.  ${item.login.toUpperCase()}</h3>
                              <span class="user-list__name">${item.name.toUpperCase()}</span>
                         </div>
                         <div class="user-block-btn">
                              <button  id="user-view ${item.id}" name="view">View</button>
                         </div>
                    </div>
               </td>
          </tr>`;
}

export const setModal = (item) => {
     return ` 
     <div class="user-modal"> 
          <div class="user-modal-content">
               <button name="close" class="close-btn">&times;</button>
               <h1 class="user-modal-item">Info about ${item.name.toUpperCase()}</h1>
               <div class="user-modal-info">
                    <div class="user-modal-privatInfo">
                         <div class ="user-modal-input_block">
                              <lable>Name :</lable>
                              <input type="text" name="name" disabled class="user-modal-input" value="${item.name.toUpperCase()}"></input>
                         </div>
                         <div class ="user-modal-input_block">
                              <lable>Login :</lable>
                              <input type="text" name="login" disabled class="user-modal-input" value="${item.login.toUpperCase()}"></input>
                         </div>
                         <div class ="user-modal-input_block">
                              <lable>Gender :</lable>
                              <input type="text" name="gender" disabled class="user-modal-input" value="${item.gender}"></input> 
                         </div> 
                    </div> 
                    <div class="user-modal-privatInfo">
                         <div class ="user-modal-input_block">
                              <lable>Phone number :</lable>
                              <input type="text" name="phoneNumber" disabled class="user-modal-input" value="${item.phoneNumber}"></input>
                         </div>
                         <div class ="user-modal-input_block">
                              <lable>City :</lable>
                              <input type="text" name="city" disabled class="user-modal-input" value="${item.city.toUpperCase()}"></input> 
                         </div>
                         <div class ="user-modal-input_block">
                              <lable>Email :</lable>
                              <input type="text" name="email" disabled class="user-modal-input" value="${item.email}"></input>
                         </div>
                    </div>
               </div>
               <div class="user-modal-btn">
                   
               </div>
          </div>
     </div>`
}

export const setButtonToModal = () => {
     return `
          <button name="confirm" >Confirm</button>
          <button name="edit" >Edit</button>
          `
}

export const installText = (text) => {
     return text;
}


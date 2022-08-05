export const setHTML = (data) => {
     return data.map((item, index) => ` 
          <tr>
               <td>
                    <div class="user-list__row">
                         <div>
                              <h3>${index+1}. ${item.login.toUpperCase()}</h3>
                              <span class="user-list__name">${item.name.toUpperCase()} </span>
                         </div>
                         <div class="user-block-btn">
                              <button id="user-delete ${item.id}"  name="delete">Delete</button>
                              <button id="user-view ${item.id}" name="view">View</button>
                         </div>
                    </div>
               </td>
          </tr>`).join(' ');    
}

export const setHTMLforModal = (item) => {
     return  ` 
          
          <h1 class="modal-item">Info about ${item.name.toUpperCase()}</h1>
                    <div class="modal-info">
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
                   
          `
}








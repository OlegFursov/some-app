export const parseRequestURL = () =>{ 
     const request = {
          resorse : location.hash.replace(/[^a-zA-Z]/g, ''),
     };
     return request;

}
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const loggedUserStringify = sessionStorage.getItem("loggedUser")
  
  if(!loggedUserStringify){
    return false
  }

  
  return true;

};

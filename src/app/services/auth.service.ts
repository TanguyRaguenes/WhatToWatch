import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(email:string, password:string):void{

    console.log(`email : ${email} | password : ${password}`)

    const usersStringify:string|null =localStorage.getItem("users")

    console.log(`user : ${usersStringify}`)

    if(usersStringify!=null){
      const usersParse:User[] = JSON.parse(usersStringify)
      console.log(usersParse)
    }

  }

  public register(user:User):void{
    const userStringify:string=JSON.stringify(user)
    console.log(`userStringify : ${userStringify}`)
    localStorage.setItem("users", userStringify)
    alert("Register successful !")
  }
}
